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
	}]);






