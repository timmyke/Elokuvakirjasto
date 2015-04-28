describe('Add movie', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ImApp');

        FirebaseServiceMock = (function () {

            var movies = [];
            return {
                // Toteuta FirebaseServicen mockatut metodit tähän
                add: function (movie) {
                    movies.push(movie);
                },
                getMovies: function () {
                    return movies;
                }
            }
        })();

        spyOn(FirebaseServiceMock, 'add').and.callThrough();

        // Lisää vakoilijat
        // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope, $location) {
            scope = $rootScope.$new();
            var location = $location;
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('NewController', {
                $scope: scope,
                $location: location,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
     * toBeCalled-oletusta.
     */
    it('should be able to add a movie by its name, director, release date and description', function () {
        scope.movie = {};
        scope.movie.title = 'Viestiä pukkaa!';
        scope.movie.director = "jepa";
        scope.movie.date = 'Date.now()';
        scope.movie.description = "jotain";
        scope.addMovie();
        expect(FirebaseServiceMock.add).toHaveBeenCalled();
        expect(FirebaseServiceMock.getMovies().length).toBe(1);
    });

    /*	
     * Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
     * not.toBeCalled-oletusta (muista not-negaatio!).
     */
    it('should not be able to add a movie if its name, director, release date or description is empty', function () {
        scope.movie = {};
        scope.movie.title = '';
        scope.movie.director = "jepa";
        scope.movie.date = 'Date.now()';
        scope.movie.description = "jotain";
        scope.addMovie();
        expect(FirebaseServiceMock.add).not.toHaveBeenCalled();
        expect(FirebaseServiceMock.getMovies().length).toBe(0);
    });
});