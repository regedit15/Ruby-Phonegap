app.controller('bookNewController', function($scope, $http, $resource, $location, factory) {

	$scope.book;

	// $scope.control = $resource('http://localhost:3000/products');

	$scope.guardar = function() {

		factory.controller().save({
			product : $scope.book
		}, function() {
			$scope.book = "";
			$location.url('/home');
		});
	}

});
