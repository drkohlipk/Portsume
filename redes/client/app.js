var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', '$cookiesProvider', function($routeProvider,
	$cookiesProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/main.html',
			controller: 'messageController'
		})
		.when('/admin', {
			templateUrl: '/static/partials/login.html',
			controller: 'messageController'
		})
		.when('/dash', {
			templateUrl: 'static/partials/dash.html',
			controller: 'messageController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
