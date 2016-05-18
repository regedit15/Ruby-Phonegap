app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'bookStoreController'
	}).when('/bookNew', {
		templateUrl : 'bookNew.html',
		controller : 'bookNewController'
	}).when('/bookView', {
		templateUrl : 'bookView.html',
		controller : 'bookViewController'
	}).otherwise({
		redirectTo : '/'
	});

});