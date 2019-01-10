const EventModel = require('../models/Event');

module.exports = {
    async create(req, res, next){
        var data = req.body;
        try{
            const event = await EventModel.create(data);
            res.send(event);
        }
        catch(err){
            next(err)
        }
    },
    async getAll(req, res, next){
        try{
            const events = await EventModel.find(req.query);
            res.send(events)
        }
        catch(err){
            next(err)
        }
    },
    async getEvent(req,res, next){
        try{
            const event = await EventModel.findById({_id: req.params.id});
            res.send(event)
        }
        catch(err){
            next(err)
        }
    },
    async updateEvent(req, res, next){
        try{
            const event = await EventModel.findByIdAndUpdate({_id: req.params.id}, {title: req.body.title, description: req.body.description, dueDate: req.body.dueDate}, {new:true});
            res.send(event)
        }
        catch(err){
            next(err)
        }
    },
    async deleteEvent(req,res,next){
        try{
            const event = await EventModel.findByIdAndDelete({_id: req.params.id});
            res.send(event)
        }
        catch(err){
            next(err)
        }
    }
}