app.controller('bookViewController', function($scope, $http, $resource, $location, service, factory) {

	$scope.book = {
		title : 'aaa',
		description : 'ssss'
	};

	service.getBook(factory.getIdBookSelected()).then(function(response) {

		$scope.book = response.data;
		console.log('Se obtiene el libro con id: ' + $scope.book.id);
	});

	$scope.volver = function() {
		$location.url('/home');
	}

});
