const fs=require("fs")
module.exports={
    bd: "./data/movies.json",
    leerJSON :function(){
      /* let moviesJSON = fs.readFileSync(this.bd,"utf-8")
      let movies = JSON.parse(moviesJSON) */
    return movies = JSON.parse( fs.readFileSync(this.bd,"utf-8"))
    },
     totalMovies:function(){
      return this.leerJSON().total_movies
    }, 
}
