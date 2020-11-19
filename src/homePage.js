const fs = require('fs');


module.exports = {
    leerJSON : function(){
        return JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'))
    },
    cantidad: function(){
        return this.leerJSON().total_movies
    },
    titulos : function(){
        return this.leerJSON().title
    },
    mostarTitulos: function(){
        let listaDeTitulos=[]
        let listaCompleta=this.leerJSON();
        listaCompleta.movies.forEach(function(movie){
           return listaDeTitulos.push('\n-'+movie.title);
           
        })
        listaDeTitulos.sort();
        
        return listaDeTitulos.join('');
    }

    }