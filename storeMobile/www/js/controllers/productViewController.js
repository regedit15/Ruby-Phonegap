app.controller('productViewController', function($scope, $http, $resource, $location, service, factory) {

	$scope.product;

	service.getProduct(factory.getIdProductSelected()).then(function(response) {

		$scope.product = response.data;
		console.log('Se obtiene el libro con id: ' + $scope.product.id);
	});

	$scope.volver = function() {
		$location.url('/home');

	}

});
