ImApp.controller('EditController', function ($scope, $routeParams, $location, FirebaseService) {
    
    var id = $routeParams.id;
    var done = function(data) {
        $scope.movie = data;
    }
    
    FirebaseService.getMovie(id, done);
    
    $scope.save = function () {
        FirebaseService.save($scope.movie);
        $location.path('/movies');
    }
});