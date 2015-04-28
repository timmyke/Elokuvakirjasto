ImApp.service('APIService', function ($http) {
    this.findMovie = function (name, year) {
        if (name === undefined)
            return $http.get('http://www.omdbapi.com', {params: {y: year}});
        if (year === undefined)
            return $http.get('http://www.omdbapi.com', {params: {s: name}});
        return $http.get('http://www.omdbapi.com', {params: {s: name, y: year}});
    }
});