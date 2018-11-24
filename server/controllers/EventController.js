const EventModel = require('../models/Event');

module.exports = {
    create: function(req, res, next){
        var data = req.body;

        EventModel.create(data).then( (event) =>{
            res.send(event);
        }).catch(next)
    },
    getAll: function(req, res, next){
        EventModel.find(req.query).then(
            (events)=>{
                res.send(events)
            }
        )
    },
    getEvent: function(req,res, next){
        EventModel.findById({_id: req.params.id}).then(
            (event) =>{
                res.send(event)
            }
        )
    },
    updateEvent: function(req, res, next){
        EventModel.findByIdAndUpdate({_id: req.params.id}, {title: req.body.title, description: req.body.description}, {new:true})
        .then(
            (event)=>{
                res.send(event)
            }
        ).catch(next)
    },
    deleteEvent: function(req,res,next){
        EventModel.findByIdAndDelete({_id: req.params.id}).then(
            (event) => {
                res.send(event)
            }
        )
    }
}