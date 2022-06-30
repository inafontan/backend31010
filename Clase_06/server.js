const http = require('http');

// Fecha y hora
const fecha = new Date().toString();

// Creamos nuestro server
const server = http.createServer((req, res) => {
    res.end(fecha);
})

const connectedServer = server.listen(8101, () => {
    console.log("Servidor escuchando en: " + connectedServer.address().port);
})
