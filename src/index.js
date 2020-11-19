
let homePage = require("./homePage");
let enCartelera = require("./enCartelera")
let contacto = require("./contacto")
let preguntasFrecuentes = require("./preguntasFrecuentes")
let sucursales = require("./sucursales")
let masVotadas = require("./masVotadas")


const totalPelis = require("./enCartelera");
const { totalMovies } = require("./homePage");
const { write } = require("fs");

module.exports = {

    homePage: function (req, res) {
        res.write("​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n\n")
        res.write("El total de peliculas en cartelera en estos momentos : " + homePage.cantidad() + "\n\n")
        res.write("Nuestro catalogo de peliculas incluye : " + "\n\n")
        res.write(`${homePage.mostarTitulos()}.`)
        res.write("\n\n\n")
        res.write("​Recordá que podés visitar las secciones:\n\n* En Cartelera\n* Más Votadas\n* Sucursales\n* Contacto\n* Preguntas Frecuentes\n")
        res.end();
 
 
    },
    enCartelera: function (req, res) {
        res.write("------------------------------------------------------------\n en Cartelera\n".toUpperCase() + "------------------------------------------------------------\n\n")
        res.write("el total de peliculas en cartelera en estos momentos es : " + enCartelera.leerJSON().total_movies+"\n\n")
        res.write("---------------------------------------------\n")
        res.write("LISTADO DE PELICULAS\n\n")

        enCartelera.leerJSON().movies.forEach(datos => { 
				 res.write("Pelicula : ".toUpperCase()+datos.title+"\n" +"sinopsis : ".toUpperCase() + datos.overview+ '\n' + "------------------------------------------------------------------------------------------------------\n")
				
            });
            
        res.end();

    },
    masVotadas: function (req, res) {
        res.write(`El promedio de estas peliculas es : ${masVotadas.promedio()} \n\n`)
        res.write('Listado de peliculas:\n\n');
        res.write(`${masVotadas.titulosFiltrados()}.`)
        res.write('--------------------------------------------')
        res.write('\n\n')
        res.end()

    },
    preguntasFrecuentes: function (req, res) {
        res.write("PREGUNTAS FRECUENTES\n\n\n")
        res.write("Cantidad de preguntas: " + preguntasFrecuentes.cantidad() + "\n\n")
    preguntasFrecuentes.leerJSON().faqs.forEach(preguntas => {
        res.write(preguntas.faq_title+"\n")
        res.write(preguntas.faq_answer+"\n")
        res.write("\n\n\n")
    }); 
    res.end();

    },
    sucursales: function (req, res) {
        res.write('Tenemos '  + sucursales.totalSucursales())
        res.write(' sucursales. ¡Vení a visitarlas!' + "\n")
        res.write("\n" + '  ↓ Las podes encontrar en estas direcciones ↓  ' + '\n\n')
        sucursales.leerJSON().theaters.forEach(sucursal => {
            res.write('       ' + '►' +sucursal.name.toUpperCase() + "\n\n")
        });
        res.end()
    },
    contacto: function (req, res) {
        res.write("============================================================"+"\n")
        res.write(contacto.titulo+"\n")
        res.write("============================================================"+ "\n\n")
        res.write(contacto.contenido)
        res.end()

    },


}
