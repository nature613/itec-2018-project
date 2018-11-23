const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController')

//create event
router.post('/events', eventController.create);


module.exports = router;