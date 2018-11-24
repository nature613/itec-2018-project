const EventModel = require('../models/Event');


module.exports = {
    create: function(req, res, next){
        var data = req.body;

        EventModel.find({_id: req.params.id}).then((events) =>{
            var event = events[0];
            // console.log(event);
            event.quizzes.push(req.body);
            EventModel.findByIdAndUpdate({_id:event._id}, event, {new: true}).then((updatedEvent)=>{
                res.send(updatedEvent)
            }).catch(next)
        }).catch(next)
    },
    getAll: function(req, res, next){
        EventModel.find({_id: req.params.id}).then((events) =>{
            var event = events[0];
            res.send(event.quizzes)
        })
    },
    getOne: function(req, res, next){
        EventModel.find({_id: req.params.id}).then((events) =>{
            var quizzes = events[0].quizzes;
            var goodQuiz = {}
            quizzes.forEach(quiz =>{
                if(quiz._id == req.params.quizId) goodQuiz = quiz
            })
            res.send(goodQuiz)
        })
    },
    
}