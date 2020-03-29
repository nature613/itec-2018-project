const QuestionModel = require('../models/Question');

module.exports = {
    async create(req, res, next){
        var data = req.body;
        try{
            question = await QuestionModel.create(data)
            res.send(question);
        }
        catch(err){
            next(err)
        }
    },
    async getAllQuestions(req, res, next){
        // console.log('poc')
        try{
            questions = await QuestionModel.find(req.query)
            res.send(questions)          
        }
        catch(err){
            next(err)
        }
    },
    async updateQuestion(req, res, next){
        try{
            const question = await QuestionModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
            res.send(question)
        }
        catch(err){
            next(err)
        }
    },
    async deleteQuestion(req, res, next){
        try{
            const question = await QuestionModel.findByIdAndDelete({_id: req.params.id});
            res.send(question);
        }
        catch(err){
            next(err)
        }
    },
    async getQuestion(req, res, next){
        try{
            const question = await QuestionModel.findById({_id: req.params.id})
            res.send(question)
        }
        catch(err){
            next(err)
        }
    },
    async getResource(req, res, next){
        var resource = req.params.resource;
        // console.log(resource)
        try{
            const questions = await QuestionModel.find({}, resource)
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
        catch(err){
            next(err)
        }     
    }
}