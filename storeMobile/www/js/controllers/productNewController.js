app.controller('productNewController', function($scope, $http, $resource, $location, factory) {

	$scope.product;

	$scope.productNew = function() {

		factory.controller().save({
			product : $scope.product
		}, function() {
			console.log('Se creo un nuevo libro');
		});

		$location.url('/home');
	}

});
