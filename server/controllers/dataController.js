var Twitter = require('twitter');
var parseTweets = require('../utils/parseTweets.js');
var axios = require('axios');
var indico = require('indico.io');
indico.apiKey = "aca85eb97cb7b1d4cbbbf07cbaad3a5b";





module.exports = {

	tweet: {
		post: function(req, res) {
			console.log('req Query', req.params)

			var client = new Twitter({
 		  	consumer_key: '3CBeeEKBdsmOpD847mIANwWjE',
  			consumer_secret: 'LeZgyXlaO4fVQdr7bXD8viy4szjUK8eJjZtCRJSkcD6JwssuET',
  			access_token_key: '878745349543796736-ZuLRepgX49yNdUIeGPaqV5FtIrKxnWk',
  			access_token_secret: '6j2LoGObneMb6qVIgUvYBrmqWA7T9cxlWbV8B96NXp8rw'
			});

			var params = {screen_name: req.params.username, count: 100};
			client.get('statuses/user_timeline', params, function(error, tweets, response) {
				if (!error) {
					var resString = parseTweets.parseTweets(tweets);
					indico.political(resString)
					.then(response => res.send(response))
				}
			})
		}
	}
}
