var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MessageSchema = new Schema({
	name: { //user must contain a first name...
		type: String,
		required: [true, 'First Name not provided'], //this field is required, if it is left blank, throw this error
		validate: { //validates first name field based on below regex
			validator: function(val) {
				return /^[a-zA-Z\-\']{2,}$/.test(val);
			},
			message: 'First Name not proper format' //throws this error if first name does not match regex
		}
	},
	email: { //user must contain an email...
		type: String,
		validate: { //validates email field based on below regex
			validator: function(val) {
				return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(val);
			},
			message: 'Email not proper format' //throws this error if email does not match regex
		},
		required: [true, 'Email not provided'] //this field is required, if it is left blank, throw this error
	},
	message: {
		type: String,
		required: [true, 'Message not provided'],
		minlength: [5, 'Message must be at least 5 characters in length']
	}
}, {
	timestamps: true
});

mongoose.model('Message', MessageSchema);
