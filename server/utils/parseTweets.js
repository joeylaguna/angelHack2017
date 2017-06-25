
module.exports = {
	parseTweets: function(arr) {
		let tweets = []
		for(var i = 0; i < arr.length; i ++)  {
			var obj = arr[i];
			for(var key in obj) {
				if(key === 'text') {
					tweets.push(obj[key])
				}
			}
		}
		console.log('tweets', tweets.length)
		return tweets.join();
	}

}

