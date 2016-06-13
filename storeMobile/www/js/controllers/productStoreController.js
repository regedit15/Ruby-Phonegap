var app = angular.module('productStore', [ 'ngRoute', 'ngMessages', 'ngResource' ]);

app.controller('productStoreController', function($scope, $http, $location, factory, $q) {

	new Promise(function(resolve, reject) {

		factory.getProducts().then(function(data) {
			$scope.products = data;
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

	$scope.productDelete = function(product) {
		var index = $scope.products.indexOf(product);
		$scope.products.splice(index, 1);
		factory.controller().remove({
			id : product.id
		}, function() {
			console.log('Se lemino el libro con id: ' + product.id);
		});
	}

	$scope.productView = function(product) {
		factory.setIdProductSelected(product.id);
		$location.url('/productView');
	}

	$scope.productEdit = function(product) {
		factory.setProductSelected(product);
		$location.url('/productEdit');
	}
});
