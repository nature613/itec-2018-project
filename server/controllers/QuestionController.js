const QuestionModel = require('../models/Question');

module.exports = {
    create: function(req, res, next){
        var data = req.body;

        QuestionModel.create(data).then( (question) =>{
            res.send(question);
        }).catch(next)
    },
    getAllQuestions: function(req, res, next){
        console.log('poc')
        QuestionModel.find(req.query).then(
            (questions) => {
                res.send(questions)
            }            
        )
    },
    updateQuestion: function(req, res, next){
        QuestionModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}).then(
            (question) => {
                res.send(question)
            }
        )
    },
    deleteQuestion: function(req, res, next){
        QuestionModel.findByIdAndDelete({_id: req.params.id}).then(
            (question) => {
                res.send(question)
            }
        )
    },
    getQuestion: function(req, res, next){
        QuestionModel.findById({_id: req.params.id}).then(
            (question) => {
                res.send(question)
            }
        )
    },
    getResource: function(req, res, next){
        var resource = req.params.resource;
        console.log(resource)
        QuestionModel.find({}, resource).then(
            (questions) => {
                var good =[];
                for (question in questions){
                    console.log(questions[question])
                    good.push(questions[question][resource])
                }
                var response = good.filter(function(item, pos) {
                    return good.indexOf(item) == pos;
                })
                
                res.send(response)
            }            
        )
    }
}