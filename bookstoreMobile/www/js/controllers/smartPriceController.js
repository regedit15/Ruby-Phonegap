var app = angular.module('bookStore', [ 'ngRoute', 'ngMessages' , 'ngResource']);

app.controller('bookStoreController', function($scope, $http) {

	$scope.tipo = 'cantidad';

	$scope.books;

	$http.get('http://localhost:3000/products.json').then(function(response) {
		$scope.books = response.data;
	});

	$scope.post = function() {

		var lista;
		$http.get('http://localhost:3000/products.json').then(function(response) {
			lista = response.data;
		});

	}

});
