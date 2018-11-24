const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController')

//Event related
router.post('/events', eventController.create);
router.get('/events', eventController.getAll);
router.get('/event/:id', eventController.getEvent);
router.put('/event/:id', eventController.updateEvent);
router.delete('/event/:id', eventController.deleteEvent);


module.exports = router;