var app = angular.module('rtfmApp');

app.controller('ThreadsController', function($scope, threadsRef) {
	$scope.threads = threadsRef;

	$scope.createThread = function(username, threadTitle) {
		$scope.threads.$add({
			username: username,
			title: threadTitle
		});
	};


});