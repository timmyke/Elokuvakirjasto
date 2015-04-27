ImApp.controller('MoviesController', function($scope, FirebaseService){
    $scope.movies = FirebaseService.getMovies();
    
	$scope.addMovie = function() {
            FirebaseService.add($scope.movie);
        }
});

