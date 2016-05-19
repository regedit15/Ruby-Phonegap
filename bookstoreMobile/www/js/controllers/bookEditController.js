app.controller('bookEditController', function($scope, $http, $resource, $location, service, factory) {

	$scope.book = factory.getBookSelected();

	$scope.volver = function() {
		$location.url('/home');
	}

	$scope.bookEdit = function() {

		factory.controller().update({
			id : $scope.book.id,
			product : $scope.book
		}, function() {
			console.log('Se edito el libro con id: ' + $scope.book.id);
		});

		$location.url('/home');
	}

});
