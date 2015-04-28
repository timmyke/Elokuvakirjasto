ImApp.controller('NewController', function ($scope, $location, FirebaseService) {
    $scope.addMovie = function () {
        if ($scope.movie.title.length > 0 && $scope.movie.director.length > 0 &&
                ($scope.movie.date !== undefined && $scope.movie.date !== undefined) && $scope.movie.description.length > 0) {
            FirebaseService.add($scope.movie);
            $location.path('/movies');
        }
    }
});