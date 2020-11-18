const fs=require("fs")
const { bd } = require("./homePage")

module.exports={
    bd: "./data/movies.json",
    leerJSON :function(){
     
    return movies = JSON.parse( fs.readFileSync(this.bd,"utf-8"))
    
    },
    totalPelis : function(){
      return bd.total_movies
      
},

    
} 