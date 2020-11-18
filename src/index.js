let homePage = require("./homePage");

const { totalMovies } = require("./homePage");


module.exports = {
    homePage: function (req, res) {
        res.write("​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n\n")
        res.write("El total de peliculas en cartelera en estos momentos :" + totalMovies )
        res.write("Nuestro catelogo de peliculas incluye : \n\n")
        res.write("\n\n\n")
        res.write("​Recordá que podés visitar las secciones:\n\n* En Cartelera\n* Más Votadas\n* Sucursales\n* Contacto\n* Preguntas Frecuentes")
        res.end();

    },
    enCartelera: function (req, res) {
    
    },
    masVotadas: function (req, res) {

    },
    preguntasFrecuentes: function (req, res) {

    },
    sucursales: function (req, res) {

    },
    contacto: function (req, res) {

    },


}
