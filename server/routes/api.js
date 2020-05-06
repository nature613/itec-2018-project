const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController')
const questionController = require('../controllers/QuestionController')
const userController = require('../controllers/UserController')
const quizController = require('../controllers/QuizControler')
const validators = require('../helpers/validators')


//Event related
router.post('/events' , validators.validateAdmin ,eventController.create);
router.get('/events', eventController.getAll);
router.get('/event/:id', eventController.getEvent);
router.put('/event/:id' , eventController.updateEvent);
router.delete('/event/:id' , eventController.deleteEvent);


//Quiz related
router.post('/event/:eventId/quizzes' , quizController.createfunction);
router.get('/event/:eventId/quizzes' , quizController.getAll);
router.get('/quiz/:quizId' , quizController.getOne);
//TODO: Add editing&deleting quiz functionality
router.put('/quiz/:quizId/rules' , quizController.updateRules);
router.post('/validatequiz' , quizController.validateQuiz);
router.post('/generateQR', quizController.generateQR);
router.put('/useQR', quizController.useQR)

//Questions related
router.post('/questions' , validators.validateAdmin, questionController.create);
router.get('/questions' , validators.validateAdmin, questionController.getAllQuestions);
router.get('/questions/:resource' , validators.validateAdmin , questionController.getResource);
router.get('/question/:id' , validators.validateAdmin , validators.validateAdmin , questionController.getQuestion);
router.put('/question/:id' , validators.validateAdmin , questionController.updateQuestion);
router.delete('/question/:id' , validators.validateAdmin , questionController.deleteQuestion);


//User related
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/confirm/:token', userController.confirm)


router.post('/test', (req, res)=>{
    res.send(req.body)
})
module.exports = router;