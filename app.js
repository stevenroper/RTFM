var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/login', {
		templateUrl: './login/loginTmpl.html',
		controller: 'LoginController'
	})
	.when('/threads', {
		templateUrl: '/threads/threads.html',
		controller: 'ThreadsController'
	})
	.when('/threads/:threadId', {

	})
	.otherwise({
		redirectTo: '/login'
	});

});