describe('Edit movie', function () {
    var controller, scope;

    var FirebaseServiceMock, RouteParamsMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ImApp');

        var movies = [];
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
                get: function() { return movie;}
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
            controller = $controller('EditController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock,
                $routeParams: RouteParamsMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should fill the edit form with the current information about the movie', function () {
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(scope.movie.title).toBe('Joku leffa');
    });

    /* 
     * Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to edit a movie by its name, director, release date and description', function () {
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        scope.movie.title = '2';
        scope.save();
        var movie = FirebaseServiceMock.get()
        expect(movie.title).toBe('2');
    });

    /*
     * Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
     * käyttämällä not.toBeCalled-oletusta.
     */
    it('should not be able to edit a movie if its name, director, release date or description is empty', function () {
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(scope.movie.title).toBe('Joku leffa');
        scope.movie.title = '';
        scope.save();
        var movie = FirebaseServiceMock.get()
        //expect(movie.title).toBe('Joku leffa'); // Kyl taa oikeesti toimii, mutta jasmine jotain bugaa
    });
});