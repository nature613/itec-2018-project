const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController')

//create event
router.post('/events', eventController.create);
router.get('/events', eventController.getAll);

module.exports = router;