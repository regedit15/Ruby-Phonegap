var app = angular.module('bookStore', [ 'ngRoute', 'ngMessages', 'ngResource' ]);

app.controller('bookStoreController', function($scope, $http, $location, factory) {

	$scope.books;

	new Promise(function(resolve, reject) {
		$http.get('http://localhost:3000/products.json').then(function(response) {
			$scope.books = response.data;
			resolve();
		});
	}).then(function(result) {

		// esto es para inicializar la tabla con bootstrap table
		$('#dataTables-example').DataTable({
			responsive : true
		});

	});

	$scope.post = function() {

		var lista;
		$http.get('http://localhost:3000/products.json').then(function(response) {
			lista = response.data;
		});

	}

	$scope.eliminar = function(book) {

		var index = $scope.books.indexOf(book);
		$scope.books.splice(index, 1);

		factory.controller().remove({
			id : book.id
		}, function() {
			console.log('Se lemino el libro con id: ' + book.id);
		});

	}

	$scope.ver = function(book) {

		factory.setIdBookSelected(book.id);
		$location.url('/bookView');

	}

});
