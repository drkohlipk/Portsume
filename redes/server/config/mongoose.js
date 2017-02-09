var mongoose = require('mongoose'),
	path = require('path'),
	fs = require('fs'),
	models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/portsume');
fs.readdirSync(models_path).forEach(function(file) {
	require(models_path + '/' + file);
});
