var ImApp = angular.module('ImApp', ['firebase', 'ngRoute']);



ImApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ListController',
        templateUrl: 'app/views/list.html'
    })
            .when('/movies', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            }).when('/movies/new', {
        controller: 'NewController',
        templateUrl: 'app/views/new.html',
        resolve: {
            currentAuth: function (AuthenticationService) {
                return AuthenticationService.checkLoggedIn();
            }
        }
    }).when('/movies/:id', {
        controller: 'DetailsController',
        templateUrl: 'app/views/details.html',
        resolve: {
            currentAuth: function (AuthenticationService) {
                return AuthenticationService.checkLoggedIn();
            }
        }
    }).when('/movies/:id/edit', {
        controller: 'EditController',
        templateUrl: 'app/views/edit.html',
        resolve: {
            currentAuth: function (AuthenticationService) {
                return AuthenticationService.checkLoggedIn();
            }
        }
    }).when('/find', {
        controller: 'ApiController',
        templateUrl: 'app/views/find.html'
    })
    .when('/login', {
        controller: 'UserController',
        templateUrl: 'app/views/login.html'
    });
});

ImApp.config(['$httpProvider', function ($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"]
    }]);


ImApp.run(function(AuthenticationService, $rootScope){
  $rootScope.logOut = function(){
    AuthenticationService.logUserOut();
  };

  $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});