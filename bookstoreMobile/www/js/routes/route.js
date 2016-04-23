app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'bookStoreController'
	}).when('/newBook', {
		templateUrl : 'newBook.html',
		controller : 'newBookController'
	}).otherwise({
		redirectTo : '/'
	});

});