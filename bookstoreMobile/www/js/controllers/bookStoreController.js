var app = angular.module('bookStore', [ 'ngRoute', 'ngMessages', 'ngResource' ]);

app.controller('bookStoreController', function($scope, $http, $resource) {

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

	// $scope.control = $resource('http://localhost:3000/products');

	$scope.control = $resource("http://localhost:3000/products/:id", {
		id : "@id"
	}, {
		'create' : {
			method : 'POST'
		},
		'index' : {
			method : 'GET',
			isArray : true
		},
		'show' : {
			method : 'GET',
			isArray : false
		},
		'update' : {
			method : 'PUT'
		},
		'destroy' : {
			method : 'DELETE'
		}
	});

	$scope.eliminar = function(book) {

		var ppp = {
			id : 1,
			title : "aaa",
			description : "ssss"
		};

		$scope.control.remove({
			id : book.id
		}, function() {
			console.log(111111111111111);
		});
	}

});
