var messages = require('../controllers/messages');

module.exports = function(app) {
	app.get('/messages', messages.index);
	app.post('/messages', messages.create);
};
