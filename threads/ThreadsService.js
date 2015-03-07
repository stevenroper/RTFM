var app = angular.module('rtfmApp');

app.service('ThreadsService', function(EnvironmentService, $firebase) {
	var firebaseUrl = EnvironmentService.getEnv().firebase;

	return {
		getThreads: function() {
			return $firebase(new Firebase(firebaseUrl + '/threads'));
		},
		getThread: function(threadId) {
			return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
		}
	};
});