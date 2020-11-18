const { homePage } = require(".");

const fs = require(fs);
 
module.exports = {
    bd : '.data/movies.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd, 'utf-8'));
    },
    cantidad : function(){
         return this.leerJSON().total_movies
    },
    listarPelis : function(){
        let movies = this.leerJSON
        let titleMovies = []
        movies.movies.forEach(function(movie){
             titleMovies.push(movie.title)
        })
        titleMovies.sort()
        return titleMovies
        },
}
module.exports = homePage