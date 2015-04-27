ImApp.controller('EditController', function ($scope, $routeParams, $location, FirebaseService) {
    
    var id = $routeParams.id;
    var done = function(data) {
        $scope.movie = data;
    }
    
    FirebaseService.getMovie(id, done);
    
    $scope.addMovie = function () {
        var st = $scope.movie.date;
        var pattern = /(\d{1,2})\.(\d{1,2})\.(\d{2,4})/;
        $scope.movie.date = new Date(st.replace(pattern, '$3-$2-$1'));
        FirebaseService.save($scope.movie);
        $location.path('/movies');
    }
});