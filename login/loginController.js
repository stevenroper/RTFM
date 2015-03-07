var app = angular.module('rtfmApp');

app.controller('LoginController', function($scope, EnvironmentService) {
	$scope.env = EnvironmentService.getEnv();
});