app.factory('factory', function($http, $resource, $q) {

	var controller;

	var productSelected;

	var idProductSelected;

	var products;

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

		getProducts : function() {

			var defer = $q.defer();

			if (products == null) {

				$http.get('http://localhost:3000/products.json').then(function(response) {
					products = response.data;
					defer.resolve(products);
				});
			} else {
				defer.resolve(products);
			}

			return defer.promise;
		},

		setIdProductSelected : function(id) {
			idProductSelected = id;
		},

		getIdProductSelected : function() {
			return idProductSelected;
		},

		setProductSelected : function(product) {
			idProductSelected = product;
		},

		getProductSelected : function() {
			return idProductSelected;
		}
	}
});