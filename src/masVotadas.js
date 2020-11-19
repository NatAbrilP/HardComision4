const fs = require("fs");

module.exports = {
    bd: "./data/movies.json",
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd,"utf-8"));
    },
    titulos:function(){
        let voteFilter = this.leerJSON().movies.filter(function(peli){
            return peli.vote_average>=7
        })
        return voteFilter.sort(function(a,b){
        if (a.vote_average>b.vote_average) {
            return -1
        }else if (a.vote_average<b.vote_average) {
            return 1
        } else {
            return 0
        }
        });
    },
    pelisFiltradas:function(){
        let archivo=this.leerJSON().movies.filter(function(peli){
            return peli.vote_average>=7
        })
            return archivo.length;
    },
    votoPromedio:function(){
        let voteFilter=this.leerJSON().movies.filter(function(peli){
            return peli.vote_average>=7
        });
        let masVotes=voteFilter.map(function(peli){
            return peli.vote_average
        })
        let puntajeVotes=masVotes.reduce(function(number,acum){
            return acum+number
        });
        return (puntajeVotes/masVotes.length).toFixed();
    },
}
