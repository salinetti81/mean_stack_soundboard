var app = angular.module("SoundBoard", []);

app.controller('CommentsListController', ['$http', function($http){
	this.soundboard = [];
	var controller = this;
	$http.get('/soundboard').then(
		
		//success
		function(response){
			controller.soundboard = response.data;
			console.log(response.data);
		},
		//error
		function() {
			console.log(err);
			}
		)
}]);