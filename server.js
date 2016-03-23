var express = require('express'),
		app 	  = express();


// Middleware
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('Hi');
});

app.listen(3000, function() {
	console.log('listen')
});