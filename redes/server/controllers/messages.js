var mongoose = require('mongoose'),
	bcrypt = require('bcrypt');

var Message = mongoose.model('Message');

module.exports = (function() { //exports an immediately invoked function to whoever imports this file
	return { //return this object upon invocation...
		index: function(req, res) {
			Message.find({}, function(err, data) {
				if (err) {
					console.log(err);
				} else {
					res.json(data);
				}
			});
		},
		create: function(req, res) { //creates a user based on entered registration information
			var message = new Message(req.body);
			message.save(function(err, data) {
				if (err) {
					console.log(err);
				} else {
					res.json(data);
				}
			});
		}
	};
})();
