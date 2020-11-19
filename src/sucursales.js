const fs=require("fs")
module.exports={
    bd: "./data/theaters.json",
    leerJSON :function(){
      /* let theathersJSON = fs.readFileSync(this.bd,"utf-8")
      let theaters = JSON.parse(theatersJSON) */
    return teathers = JSON.parse( fs.readFileSync(this.bd,"utf-8"))
    },
     theaters:function(){
      return (this.leerJSON().total_theaters)
    }
}