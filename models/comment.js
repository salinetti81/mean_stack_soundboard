var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	name: String,
	comment: String

});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;




