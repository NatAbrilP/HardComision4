const fs = require("fs");
const { leerJSON } = require("./homePage");


module.exports = {
    leerJSON : function(){
        return JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'))
},
mostarTitulos: function(){
    let listaDeTitulos=[]
    let listaCompleta=this.leerJSON();
    listaCompleta.movies.forEach(function(movie){
       return listaDeTitulos.push('\n-'+movie.title);
       
    })
    listaDeTitulos.sort();
    
    return listaDeTitulos.join('');
},
titulosFiltrados: function(){
        let pelis = this.leerJSON().movies
        let pelisFiltradas = pelis.filter(function(pelicula){
             return pelicula.vote_average >=7
        })
        
        return pelisFiltradas
     },

    promedio : function(){
        let votadas = 0
        let votosFiltrados = this.leerJSON().movies
        votosFiltrados.forEach(function(peli){
            votadas = ((votadas + peli.vote_average) / votosFiltrados.length  )
        })
        return votadas
    }
}