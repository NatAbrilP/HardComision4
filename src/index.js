
let homePage = require("./homePage");
let enCartelera = require("./enCartelera")



const totalPelis  = require("./enCartelera");
const { totalMovies } = require("./homePage");

module.exports = {
   homePage: function (req, res) {
       res.write("​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n\n")
       res.write("El total de peliculas en cartelera en estos momentos : " + homePage.cantidad() + "\n")
       res.write("Nuestro catalogo de peliculas incluye : " + "\n\n")
       homePage.leerJSON().movies.forEach(pelicula => {
        res.write(pelicula.title.toUpperCase() + "\n\n")
    });
       res.write("\n\n\n")
       res.write("​Recordá que podés visitar las secciones:\n\n* En Cartelera\n* Más Votadas\n* Sucursales\n* Contacto\n* Preguntas Frecuentes\n")
       /* homePage.leerJSON().movies.forEach(pelicula => {
        res.write(pelicula.title)
    }); */
    /*    res.write(homePage.pelisOrden()) */
       res.end();


   },
   enCartelera: function (req, res) {
       res.write("------------------------------------------------------------\n en Cartelera\n".toUpperCase()+ "------------------------------------------------------------\n\n")
       res.write( "el total de peliculas en cartelera en estos momentos es :" + totalMovies)
       res.end();
   
   },
   masVotadas: function (req, res) {
       res.write("aca va algo de los votos")
       res.end()

   },
   preguntasFrecuentes: function (req, res) {

   },
   sucursales: function (req, res) {

   },
   contacto: function (req, res) {

   },


}
