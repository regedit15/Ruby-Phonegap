app.service('service', function($http) {

	this.getProduct = function(id) {

		var p = $http.get('http://localhost:3000/products/' + id + '.json');

		return p;
	};

});