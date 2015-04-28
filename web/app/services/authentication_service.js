ImApp.service('AuthenticationService', function ($firebase, $firebaseAuth) {
    var firebaseRef = new Firebase('https://shining-torch-3347.firebaseio.com/');
    var firebaseAuth = $firebaseAuth(firebaseRef);

    this.logUserIn = function (email, password) {
        return firebaseAuth.$authWithPassword({
            email: email,
            password: password
        });
    }

    this.createUser = function (email, password) {
        return firebaseAuth.$createUser({
            email: email,
            password: password
        });
    }

    this.checkLoggedIn = function () {
        return firebaseAuth.$waitForAuth();
    }

    this.logUserOut = function () {
        firebaseAuth.$unauth();
    };

    this.getUserLoggedIn = function () {
        return firebaseAuth.$getAuth();
    }
});