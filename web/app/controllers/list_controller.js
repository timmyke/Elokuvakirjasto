ImApp.controller('ListController', function($scope, FirebaseService){
    $scope.movies = FirebaseService.getMovies();

        
        $scope.delete = function(movie) {
            FirebaseService.remove(movie);
        }
});

