const http = require('http');
const port = 8081;


console.log(`Servidor on: http://localhost:${port}`);
http.createServer((request, response) => {
    response.end("<h1>Hello World</h1>");
}).listen(port);
