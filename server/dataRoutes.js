var controller = require('./controllers/dataController.js');

var router = require('express').Router();


router.get('/tweet', controller.tweet.get)

module.exports = router;