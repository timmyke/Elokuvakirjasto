ImApp.controller('ApiController', function ($scope, APIService) {
    $scope.movies = '';
    $scope.search = {};
    $scope.search.name = '';
    $scope.search.year = '';
    $scope.count = -1;

    $scope.doSearch = function () {
        $scope.count = -1;
        APIService.findMovie($scope.search.name, $scope.search.year).success(function (movies) {
            $scope.movies = movies.Search;
            console.log(movies);
            console.log(movies.Search);
            
            if ($scope.movies.length === 0 || $scope.movies.Response === "False"  ) {
                $scope.movies = [];
            }
            
            $scope.count = $scope.movies.length;
        });
    }
});