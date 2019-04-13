const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    var jsonText = '[{"tekst":"tekst oglasa 1", "cijena": "500"},{"tekst":"tekst oglasa 2", "cijena": "50"},{"tekst":"tekst oglasa 3", "cijena": "200"},{"tekst":"tekst oglasa 4", "cijena": "750"},{"tekst":"Fal dam sam da prodam", "cijena": "20"}, {"tekst":"mjenjam, necem prodati", "cijena": "0"}]';
    res.end(jsonText);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

ZebraGitHub202