app.factory('factory', function($resource) {

	var controller;

	var idBookSelected;

	return {
		controller : function() {

			// $scope.control = $resource('http://localhost:3000/products');
			controller = $resource("http://localhost:3000/products/:id", {
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
			return controller;
		},

		setIdBookSelected : function(id) {
			idBookSelected = id;
		},

		getIdBookSelected : function(id) {
			return idBookSelected;
		}
	}
});