const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//JSON veri tipinde gelecek olan dataların 
//kullanılabilmesi için bu tanımlamanın yapılması gerekmektedir. ->bodyParser
app.use(bodyParser.json());

//would be done for all the requests, get, put, post, and delete, on the dishes
app.all('/dishes', ((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}));

app.get('/dishes', (req, res, next) => {
    res.end('will send all the dishes to you!');

});

app.post('/dishes', (req, res, next) => {
    res.end('will add the dish: ' + req.body.name + ' with details: ' + req.body.description);

});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes ');
});

app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes!');

});
//** */

app.get('/dishes/:dishId', (req, res, next) => {
    res.end(`will send  details of ${req.params.dishId} to you!`);

});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /dishes/${req.params.dishId}`);

});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write(`Updating the dish ${req.params.dishId} \n`);
    res.end(`will update the dish ${req.body.name} with details ${req.body.description}`);

});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end(`deleting dish : ${req.params.dishId}`);

});



// serve up the static files from double underscore dirname
//check root folder inside public
app.use(express.static(__dirname + '/public'))

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