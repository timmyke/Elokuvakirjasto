ImApp.controller('NewMovieController', function ($scope, $location, FirebaseService) {
    $scope.addMovie = function () {
        var st = $scope.movie.date;
        var pattern = /(\d{1,2})\.(\d{1,2})\.(\d{2,4})/;
        $scope.movie.date = new Date(st.replace(pattern, '$3-$2-$1'));
        FirebaseService.add($scope.movie);
        $location.path('/movies');
    }
});