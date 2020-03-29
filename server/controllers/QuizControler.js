const QuizModel = require('../models/Quiz')
const QuestionModel = require('../models/Question')
const compare = require('../helpers/compare')
const mail = require('../helpers/mailconfig')
const randomstring = require('randomstring')

module.exports = {
    async createfunction(req, res, next){
        var data = req.body;
        const quiz = await QuizModel.create(data)
        res.send(quiz)
    },
    getAll: function(req, res, next){
        QuizModel.find(req.query).then((quizzes)=>{
            res.send(quizzes)
        })
    },
    getOne: function(req, res, next){
        QuizModel.find({_id:req.params.id}).then(
            (quiz) => {
                res.send(quiz)
            }
        )
    },
    deleteRules: function(req,res,next){
        QuizModel.findByIdAndDelete({_id: req.params.id}).then(
            (quiz) => {
                res.send(quiz)
            }
        )
    },
    updateRules: function(req, res, next){
        QuizModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}).then(
            (quiz) =>{
                res.send(quiz)
            }
        )        
    },
    validateQuiz: function(req, res, next){
        var questions = req.body.questions;
        var questionIds = [];
        var givenAnswers = [];
        var score = 0;
        for (question in questions){
            questionIds.push(questions[question].id);
            givenAnswers.push(questions[question].answers);
        };
        //console.log(questionIds)
        QuestionModel.find({'_id': {$in:questionIds}}, 'correctAnswers').then(
            (correctAnswers) =>{
                for (answer in correctAnswers){
                    correctAnswers[answer] = correctAnswers[answer].correctAnswers;
                    if(compare(correctAnswers[answer], givenAnswers[answer])) score++;
                };
                QuizModel.findById({_id:req.body.quizId}, 'title leaderboard').then(
                    (quiz) =>{
                        quiz.leaderboard.push({name: req.body.user.name, id: req.body.user.id, score: score});
                        quiz.save();
                        mail.transporter.sendMail({
                            from: 'Kevin De Vadder <devadderkevin@gmail.com>',
                            to: req.body.user.email,
                            subject: 'Results to the "'+ quiz.title +'" quiz!',
                            html: 'Your score is:' + score
                        }).then(
                            () =>{
                                res.send({"status": "email sent"})
                            }
                        ).catch(next)
                    }
                )
            }
        );


    },
    generateQR: function(req, res, next){
        var quizId = req.body.quizID;
        var QRId = randomstring.generate(10);
        QuizModel.findOne({_id: quizId}, 'generatedQuizzes').then((quiz) =>{
            console.log(quiz);
            quiz.generatedQuizzes.push({QRid:QRId});
            quiz.save();
            res.send({QRId: QRId})
        })
        
    },
    useQR: function(req, res, next){
        var quizId = req.body.quizID;
        var QRId = req.body.QRId;

        QuizModel.findOne({_id: quizId}, 'generatedQuizzes').then(
            (quiz) => {
                for (i in quiz.generatedQuizzes){
                    console.log
                    if (quiz.generatedQuizzes[i].QRid == QRId) quiz.generatedQuizzes[i].used = true
                }
                quiz.save()
                res.send(quiz)
            }
        )
    }
}