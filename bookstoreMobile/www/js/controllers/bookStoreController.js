var app = angular.module('bookStore', [ 'ngRoute', 'ngMessages', 'ngResource' ]);

app.controller('bookStoreController', function($scope, $http, $location, factory, $q) {

	new Promise(function(resolve, reject) {

		factory.getBooks().then(function(data) {
			$scope.books = data;
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

	$scope.bookDelete = function(book) {
		var index = $scope.books.indexOf(book);
		$scope.books.splice(index, 1);
		factory.controller().remove({
			id : book.id
		}, function() {
			console.log('Se lemino el libro con id: ' + book.id);
		});
	}

	$scope.bookView = function(book) {
		factory.setIdBookSelected(book.id);
		$location.url('/bookView');
	}

	$scope.bookEdit = function(book) {
		factory.setBookSelected(book);
		$location.url('/bookEdit');
	}
});
