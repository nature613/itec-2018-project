const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController')
const questionController = require('../controllers/QuestionController')

//Event related
router.post('/events', eventController.create);
router.get('/events', eventController.getAll);
router.get('/event/:id', eventController.getEvent);
router.put('/event/:id', eventController.updateEvent);
router.delete('/event/:id', eventController.deleteEvent);


//Quiz related


//Questions related
router.post('/questions', questionController.create);
router.get('/questions', questionController.getAllQuestions);
router.get('/questions/:resource', questionController.getResource);
router.get('/question/:id', questionController.getQuestion);
router.put('/question/:id', questionController.updateQuestion);
router.delete('/question/:id', questionController.deleteQuestion);


//User related


module.exports = router;