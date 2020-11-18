const fs=require("fs")
module.exports={
    bd: "./data/faqs.json",
    leerJSON :function(){
      /* let faqsJSON = fs.readFileSync(this.bd,"utf-8")
      let faqs = JSON.parse(faqsJSON) */
    return faqs = JSON.parse( fs.readFileSync(this.bd,"utf-8"))
    },
     faqs:function(){
      return (this.leerJSON().total_faqs
      )}
}