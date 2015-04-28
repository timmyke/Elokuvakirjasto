describe('Movie list', function () {
    var controller, scope;
    var FirebaseServiceMock;
    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ImApp');
        var movies = [{title: 'Eka',
                director: 'Kalle Ilves',
                date: 2015,
                description: 'Mahtava leffa!'},
            {title: 'Toka',
                director: 'Kalle Ilves',
                date: 2015,
                description: 'Mahtava leffa!'}];
        
        FirebaseServiceMock = (function () {
            return {
                getMovies: function () {
                    return movies;
                },
                remove: function (muuv) {
                    var jou;
                }
            }
        })();
        // Lisää vakoilijat
        // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
        spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();
        spyOn(FirebaseServiceMock, 'remove').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('ListController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });
    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should list all movies from the Firebase', function () {
        expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
        expect(scope.movies.length).toBe(2);
    });
    /* 
     * Testaa, että elokuvan pystyy poistamaan Firebasesta.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to remove a movie', function () {
        expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
        scope.delete(scope.movies[1]);
        expect(FirebaseServiceMock.remove).toHaveBeenCalled();
    });
});