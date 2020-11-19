
module.exports = {
    texto : " ​¿Tenés algo para contarnos? Nos encanta  escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@gialhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y sera respondido a la brevedad posible, recorda que tambien podes consultar la seccion de prerguntas frecuentes para obtener respuestas inmediatas a los problemas mas comunes"
    
}
const fs = require("fs")


module.exports = {
  bd: "./data/faqs.json",
  titulo: "Contactanos📞",
  contenido : "​¿Tenés algo para contarnos? Nos encanta escuchar a nuestrosclientes. Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales.\nEnvianos tu consulta,sugerencia o reclamo y será respondido a la brevedad posible. Recordá quetambién podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.",
  leerJSON: function () {

    return JSON.parse(fs.readFileSync(this.bd, "utf-8"))

  },
   } 
   
