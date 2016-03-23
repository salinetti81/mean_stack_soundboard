var express = require('express');
var router =express.Router();
var Comment = require('../models/comment.js')


//Get Comments
router.get('/', function(req, res){
	Comment.find({}, function(err, comments) {
		res.json(comments);
	});
});


module.exports = router;




