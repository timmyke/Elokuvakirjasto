var ImApp = angular.module('ImApp', ['firebase', 'ngRoute']);



ImApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
        controller: 'MoviesController',
        templateUrl: 'app/views/movies.html'
    })
            .when('/movies', {
                controller: 'MoviesController',
                templateUrl: 'app/views/movies.html'
            }).when('/movies/new', {
                controller: 'NewMovieController',
                templateUrl: 'app/views/new_movie.html'
            }).when('/movies/:id', {
                controller: 'EditController',
                templateUrl: 'app/views/new_movie.html'
            });
});