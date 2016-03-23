var express = require('express');
var router =express.Router();
var Comment = require('../models/comment.js')


//Get Comments
router.get('/', function(req, res){
	Comment.find({}, function(err, comments) {
		res.json(comments);
	});
});

// Post the comments to the page and save to DB
router.post('/', function(req, res) {
	var newComment = new Comment(req.body)
	newComment.save(function(err, data){
		res.send(data);
	})
});

module.exports = router;




