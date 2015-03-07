var app = angular.module('rtfmApp');

app.controller('LoginController', function($scope, EnvironmentService, $location) {
	$scope.env = EnvironmentService.getEnv();

	$scope.logMeIn = function(username) {
		alert(username);
		$location.path('/threads');
	};


});