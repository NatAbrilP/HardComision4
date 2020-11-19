const fs = require('fs');


module.exports = {
    leerJSON : function(){
        return JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'))
    },
    cantidad: function(){
        return this.leerJSON().total_movies
    }
}