ImApp.controller('DetailsController', function ($scope, $routeParams, FirebaseService) {

    var id = $routeParams.id;
    var done = function (data) {
        $scope.movie = data;
    }

    FirebaseService.getMovie(id, done);

    $scope.formatDate = function (date) {
        var dateOut = new Date(date);
        return dateOut;
    };
});