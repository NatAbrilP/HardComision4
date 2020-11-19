const fs = require("fs")


module.exports = {
  leerJSON: function () {
    return JSON.parse(fs.readFileSync('./data/faqs.json', 'utf-8'))
  },
  cantidad: function () {
    return this.leerJSON().total_faqs
  },
}