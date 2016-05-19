app.controller('bookNewController', function($scope, $http, $resource, $location, factory) {

	$scope.book;

	$scope.bookNew = function() {

		factory.controller().save({
			product : $scope.book
		}, function() {
			console.log('Se creo un nuevo libro');
		});
		
		$location.url('/home');
	}

});
