const fs = require("fs")
const { bd, leerJSON } = require("./homePage")

module.exports = {
  bd: "./data/movies.json",
  titulo: "En cartelera",
  leerJSON: function () {

    return JSON.parse(fs.readFileSync(this.bd, "utf-8"))

  },
   
    
  
  
} 