var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/login', {
		templateUrl: 'login/loginTmpl.html',
		controller: 'LoginController'
	})

	.when('/threads', {
		templateUrl: 'threads/threads.html',
		controller: 'ThreadsController',
		resolve: {
			threadsRef: function(ThreadsService) {
				return ThreadsService.getThreads();
			}
		}
	})

	.when('/threads/:threadId', {
		templateUrl: 'thread/thread.html',
		controller: 'ThreadController',
		resolve: {
	    threadRef: function (ThreadsService, $route) {
	      return ThreadsService.getThread($route.current.params.threadId);
	    },
	    commentsRef: function (ThreadsService, $route) {
      	return ThreadsService.getComments($route.current.params.threadId);
    	}
  	}
	})
	.otherwise({
		redirectTo: 'login'
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