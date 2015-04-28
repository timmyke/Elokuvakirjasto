var ImApp = angular.module('ImApp', ['firebase', 'ngRoute']);



ImApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
        controller: 'ListController',
        templateUrl: 'app/views/list.html'
    })
            .when('/movies', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            }).when('/movies/new', {
                controller: 'NewController',
                templateUrl: 'app/views/new.html'
            }).when('/movies/:id', {
                controller: 'DetailsController',
                templateUrl: 'app/views/details.html'
            }).when('/movies/:id/edit', {
                controller: 'EditController',
                templateUrl: 'app/views/edit.html'
            }).when('/find', {
                controller: 'ApiController',
                templateUrl: 'app/views/find.html'
            });
});

ImApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);