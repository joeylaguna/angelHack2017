var controller = require('./controllers/dataController.js');

var router = require('express').Router();


router.post('/tweet/:username', controller.tweet.post)

module.exports = router;