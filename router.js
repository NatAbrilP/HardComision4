const index = require("./src/index")
module.exports = function (req, res) {
    switch (req.url) {
        case "/":
            index.homePage(req,res)
            //deriva en el controlador del HOME
            break;
        case "./en-cartelera":
            index.enCartelera(req,res)
            //deriva en el controlador de cartelera
            break;
        case "./contacto":
            index.contacto(req,res)
            //deriva en el controlador de contacto
            break;
        case "./mas-votadas":
            index.masVotadas(req,res)
            //deriva en el controlador de masVotadas
            break;
        case "preguntas-frecuentes":
            index.preguntasFrecuentes(req,res)
            //deriva en el controlador de PreguntasFrecuentes
            break;
        case "sucursales":
            index.sucursales(req,res)
            //deriva en el controlador de cartelera
            break;
        default: "404"
            break;
    }
}