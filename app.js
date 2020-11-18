const http = require('http');
const router = require("./router");//requiero el enrutador

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    router(req,res)
}).listen(3030, 'localhost', () => console.log('El server esta levantado en el puerto 3030 '));

// prueba
