ImApp.controller('EditController', function ($scope, $routeParams, $location, FirebaseService) {
    $scope.movie = {};
    var id = $routeParams.id;
    var done = function (data) {
        $scope.movie = data;
    }

    FirebaseService.getMovie(id, done);
    
    $scope.save = function () {
        if ((!$scope.movie.title || $scope.movie.title.length === 0) && $scope.movie.director.length > 0 &&
                $scope.movie.date !== undefined && 
                $scope.movie.description.length > 0) {
            console.log("Title: "+ $scope.movie.title.length + " " + $scope.movie.title);
            FirebaseService.save($scope.movie);
            $location.path('/movies');
        }
    }
});