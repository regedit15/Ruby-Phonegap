app.controller('productEditController', function($scope, $http, $resource, $location, service, factory) {

	$scope.product = factory.getProductSelected();

	$scope.volver = function() {
		$location.url('/home');
	}

	$scope.productEdit = function() {

		factory.controller().update({
			id : $scope.product.id,
			product : $scope.product
		}, function() {
			console.log('Se edito el libro con id: ' + $scope.product.id);
		});

		$location.url('/home');
	}

});
