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

app.run(function($rootScope, $location, EnvironmentService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if(EnvironmentService.getUserName()) {
			$rootScope.username = EnvironmentService.getUserName();
		} else {
			$location.path('/login');
		}
	});

});