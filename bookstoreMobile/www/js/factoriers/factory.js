app.factory('factory', function($http, $resource, $q) {

	var controller;

	var bookSelected;

	var idBookSelected;

	var books;

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

		getBooks : function() {

			var defer = $q.defer();

			if (books == null) {

				$http.get('http://localhost:3000/products.json').then(function(response) {
					books = response.data;
					defer.resolve(books);
				});
			} else {
				defer.resolve(books);
			}

			return defer.promise;
		},

		setIdBookSelected : function(id) {
			idBookSelected = id;
		},

		getIdBookSelected : function() {
			return idBookSelected;
		},

		setBookSelected : function(book) {
			idBookSelected = book;
		},

		getBookSelected : function() {
			return idBookSelected;
		}
	}
});