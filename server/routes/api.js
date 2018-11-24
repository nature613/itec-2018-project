const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController')
const questionController = require('../controllers/QuestionController')
const userController = require('../controllers/UserController')

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
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.status(400).json({ status: "error", message: err.message, data: null });
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            req.body.isAdmin = decoded.admin;
            next();
        }
    });

}

function validateAdmin(req, res, next){
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.status(400).json({ status: "error", message: err.message, data: null });
        } 
        else if(decoded.isAdmin != true){
            res.status(403).json({status: "error", message: "Forbidden"})
        }
        else {
            // add user id to request
            req.body.userId = decoded.id;
            req.body.isAdmin = decoded.admin;
            next();
        }
    });
}
module.exports = router;