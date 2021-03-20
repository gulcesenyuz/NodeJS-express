const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const app = express();

//call to  set up our server
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/html');
    res.end('<html><body><h1> Welcome to Express Server</h1></body></html>');


});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);

})