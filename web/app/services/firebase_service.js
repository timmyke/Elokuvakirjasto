ImApp.service('FirebaseService', function ($firebase) {
    var moviesFirebaseRef = new Firebase('https://shining-torch-3347.firebaseio.com/movies');
    var moviesSync = $firebase(moviesFirebaseRef);
    var movies = moviesSync.$asArray();

    this.add = function (movie) {
        movies.$add(movie);
    }
    
    this.remove = function(movie) {
        movies.$remove(movie);
    }
    
    this.removeAll = function() {
        moviesFirebaseRef.set([]);
    }
    
    this.getMovies= function () {
        return movies;
    }
    
    this.save = function(movie) {
        movies.$save(movie);
    }
});