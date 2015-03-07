var app = angular.module('rtfmApp');

app.service('ThreadsService', function(EnvironmentService, $firebaseArray, $firebaseObject) {
	var firebaseUrl = EnvironmentService.getEnv().firebase;

	return {
		
		getThreads: function() {
			return $firebaseArray(new Firebase(firebaseUrl + '/threads'));
		},
		
		getThread: function(threadId) {
			return $firebaseObject(new Firebase(firebaseUrl + '/threads/' + threadId));
		},

		getComments: function(threadId) {
			return $firebaseArray(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'))
		}
	
	};
});