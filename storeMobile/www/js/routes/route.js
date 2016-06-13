app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'productStoreController'
	}).when('/productNew', {
		templateUrl : 'productNew.html',
		controller : 'productNewController'
	}).when('/productView', {
		templateUrl : 'productView.html',
		controller : 'productViewController'
	}).when('/productEdit', {
		templateUrl : 'productEdit.html',
		controller : 'productEditController'
	}).otherwise({
		redirectTo : '/'
	});

});