describe('Show movie', function () {
    var controller, scope;

    var FirebaseServiceMock, RouteParamsMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ImApp');

        FirebaseServiceMock = (function () {
            var movie = {title: 'Joku leffa',
                director: 'Kalle Ilves',
                date: 2015,
                description: 'Mahtava leffa!'};

            return {
                getMovie: function (id, done) {
                    //if (id == 'abc123') {
                    done(movie);
                    //}
                },
                save: function (moov) {
                    movie = moov;
                },
                get: function () {
                    return movie;
                }
            }
        })();

        RouteParamsMock = (function () {
            return {
                id: 'abc123'
            }
        });

        // Lisää vakoilijat
        // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
        spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('DetailsController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock,
                $routePrams: RouteParamsMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /* 
     * Testaa, että Firebasesta (mockilta) saatu elokuva löytyy kontrollerista.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota
     * käyttämällä toBeCalled-oletusta.
     */
    it('should show current movie from Firebase', function () {
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(scope.movie.title).toBe('Joku leffa');
    });
});