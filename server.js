var express 		= require('express'),
		app 	  		= express(),
		mongoose 		= require('mongoose'),
		bodyParser 	= require('body-parser'),
 		port = process.env.PORT || 3000;

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sounds-board';
mongoose.connect(mongoUri);


app.use(bodyParser.json());

// Middleware
	//Serve index.html and app.js
app.use(express.static('public'));

var soundBoardController = require('./controllers/comments.js');
app.use('/comments', soundBoardController); 

// mongoose.connect('mongodb://localhost:27017/soundboard');

mongoose.connection.once('open', function() {
	console.log('connected to mongo');
	app.listen(port, function() {
		console.log('listen')
	});
});




