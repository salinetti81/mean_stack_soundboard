var express = require('express');
var router =express.Router();
var Comment = require('../models/comment.js')


//Get Comments
router.get('/', function(req, res){
	Comment.find({}, function(err, comments) {
		res.json(comments);
	});
});

// Post the comments to the page
router.post('/', function(req, res) {
	res.send(req.body);
});

module.exports = router;




