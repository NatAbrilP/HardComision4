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
    pelisOrden : function(){
        let orden = []
        this.leerJSON().movies.forEach((peli) => {
            orden.push(peli.title);
        })
        return orden.sort(function(a,b){
            return a.toLowerCase().loceleCompare(b.toLowerCase());
        });
    }
    
	}