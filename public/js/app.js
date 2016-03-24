var app = angular.module("SoundBoard", []);
					


// SoundBoard Section
app.controller('SoundBoardController', [function($scope,ngAudio){
	
	this.title = "Sound Board";

	this.displayContent = false;

//click to reveal content
	var controller = this; // redefined this for click handler
	this.showContent = function() {
		//toggle controller to see and hide soundboards with true/false
		controller.displayContent = !controller.displayContent;
	}
}]);



// Comments Section 
app.controller('CommentsListController', ['$http', function($http){
	this.comments = [];
	var controller = this;
	$http.get('/comments').then(
		
		//success
		function(response){
			controller.comments = response.data;
			// console.log(response.data);
		},
		//error
		function() {
			console.log(err);
			}
		)
}]); //ends CommentsListController

	app.controller('CreateCommentController', ['$scope', '$http', function($scope, $http){
		var controller = this;
		this.create = function(){
			$http({
				method:'POST',
				url:'/comments',
				data: this
			}).then(
				//success
				function(response) {
					console.log(response);
					$scope.$$prevSibling.commentsCtrl.comments.push(response.data);
					controller.name = undefined;
					controller.comment = undefined;
				},
				//fail
				function(){

				}
			);
		}
	 }]); //ends CreateCommentController






