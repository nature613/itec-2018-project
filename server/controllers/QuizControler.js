const QuizModel = require('../models/Quiz')
const QuestionModel = require('../models/Question')
const compare = require('../helpers/compare')
const mail = require('../helpers/mailconfig')
const randomstring = require('randomstring')

module.exports = {
    async createfunction(req, res, next){
        var data = req.body;
        try{
            const eventId = req.params.eventId;
            data.parentEvent = eventId;
            const quiz = await QuizModel.create(data)
            res.send(quiz)
        }
        catch(err){
            next(err)
        }
    },
    async getAll(req, res, next){
        try{
            const eventId = req.params.eventId;
            req.query.parentEvent = eventId;
            const quizzes = await QuizModel.find(req.query)
            res.send(quizzes)
        }
        catch(err){
            next(err)
        }
    },
    async getOne(req, res, next){
        try{
            const quizId = req.params.quizId;
            const quiz = await QuizModel.find({_id:quizId})
            res.send(quiz)
        }
        catch(err){
            next(err)
        }
    },
    //Rules will be deleted by sending an empty array to the update route
    async updateRules(req, res, next){
        try{
            const rules = req.body.rules;
            const quizId = req.params.quizId;
            const quiz = await QuizModel.findById({_id: quizId});
            quiz.rules = rules;
            quiz.save();
            res.send(quiz)
        }
        catch(err){
            next(err)
        }       
    },

    async validateQuiz(req, res, next){
        const questions = req.body.questions;
        const username = req.body.user.name;
        const userID = req.body.user.id;
        var questionIds = [];
        var givenAnswers = [];
        var score = 0;
        for (question in questions){
            questionIds.push(questions[question].id);
            givenAnswers.push(questions[question].answers);
        };
        // console.log(questionIds)
        try{
            correctAnswers = await QuestionModel.find({'_id': {$in:questionIds}}, 'correctAnswers')
            // console.log(correctAnswers)
            for (answer in correctAnswers){
                correctAnswers[answer] = correctAnswers[answer].correctAnswers;
                if(compare(correctAnswers[answer], givenAnswers[answer])) score++;
            };
            // console.log(score)
            try{
                // console.log(req.body.quizId)
                quiz = await QuizModel.findById({_id:req.body.quizId}, 'title leaderboard')
                quiz.leaderboard.push({name: username, id: userID, score: score});
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
            catch(err){
                next(err)
            }
        }
        catch(err){
            next(err)
        }
    },


    async generateQR(req, res, next){
        const quizId = req.body.quizId;
        const amountOfQuizzes = req.body.amount;
        let generatedQRs = [];
        for(let i = 0; i < amountOfQuizzes ; i++ ){
            let QRId = randomstring.generate(10);
            generatedQRs.push(QRId);
        }
        // console.log(generatedQRs)
        try{
            let quiz =  await QuizModel.findOne({_id: quizId}, 'generatedQuizzes')
            for(let i = 0; i < amountOfQuizzes ; i++ ){
                quiz.generatedQuizzes.push({QRid:generatedQRs[i]});
            }
            quiz.save();
           res.send({generatedQRs: generatedQRs})
        }
        catch(err){
            next(err)
        }
    },

    async useQR(req, res, next){
        const quizId = req.body.quizId;
        const QRId = req.body.QRId;
        try{
            let quiz = await QuizModel.findOne({_id: quizId}, 'generatedQuizzes rules')
            for (i in quiz.generatedQuizzes){
                if (quiz.generatedQuizzes[i].QRid == QRId){
                    if(quiz.generatedQuizzes[i].used != true){
                        quiz.generatedQuizzes[i].used = true
                    }
                    else{
                        res.status(400).send({error: "Quiz already used"})
                    }
                }
            }
            quiz.save()
            res.send(quiz)
        }
        catch(err){
            next(err)
        }
    }
}