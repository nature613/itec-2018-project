const EventModel = require('../models/Event');

module.exports = {
    create: function(req, res, next){
        var data = req.body;

        EventModel.create(data).then( (event) =>{
            res.send(event);
        }).catch(next)
    },
    getAll: function(req, res, next){
        EventModel.find({}).then(
            (events)=>{
                res.send(events)
            }
        )
    }
}