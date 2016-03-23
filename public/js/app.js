var app = angular.module("SoundBoard", []);

app.controller('CommentsListController', ['$http', function($http){
	this.comments = [];
	var controller = this;
	$http.get('/comments').then(
		
		//success
		function(response){
			controller.comments = response.data;
			console.log(response.data);
		},
		//error
		function() {
			console.log(err);
			}
		)
}]); //ends CommentsListController

	app.controller('CreateCommentController', ['$http', function($http){
		this.create = function(){
			console.log(this);
		}
	}]);






