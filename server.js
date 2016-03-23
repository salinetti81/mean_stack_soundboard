var express 		= require('express'),
		app 	  		= express(),
		mongoose 		= require('mongoose'),
		bodyParser 	= require('body-parser');

app.use(bodyParser.json());

// Middleware
	//Serve index.html and app.js
app.use(express.static('public'));

var soundBoardController = require('./controllers/soundboard.js');
app.use('/soundboard', soundBoardController); 

mongoose.connect('mongodb://localhost:27017/soundboard');

mongoose.connection.once('open', function() {
	console.log('connected to mongo');
	app.listen(3000, function() {
		console.log('listen')
	});
});




