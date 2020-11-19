const fs = require('fs');

let moviesParse = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'))

let totalM