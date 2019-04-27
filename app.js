const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var router = require('./router.js');

const server = http.createServer((req, res) => {
    router.home(req, res);
    router.search(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});