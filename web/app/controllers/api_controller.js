ImApp.controller('ApiController', function ($scope, APIService) {
    $scope.movies = '';
    $scope.search = {};
    $scope.search.name = '';
    $scope.search.year = '';

    $scope.doSearch = function () {
        
        APIService.findMovie($scope.search.name, $scope.search.year).success(function (movies) {
            $scope.movies = movies.Search;
            console.log(movies);
            console.log(movies.Search);
            
            if ($scope.movies.length === 0 || )
        });
    }
});