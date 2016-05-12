app.controller('newBookController', function($scope, $http, $resource) {

    $scope.book;

    $scope.control = $resource('http://localhost:3000/products');

    $scope.guardar = function() {

        $scope.control.save({
            product: $scope.book
        }, function() {
            $scope.book = "";
        });
    }

});
