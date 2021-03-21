const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//JSON veri tipinde gelecek olan dataların 
//kullanılabilmesi için bu tanımlamanın yapılması gerekmektedir. ->bodyParser
app.use(bodyParser.json());


//in my express application,
//any request coming to that slash dishes endpoint will be handled by dishRouter
app.use('/dishes', dishRouter);
app.use('/dishes/:dishId', dishRouter);

app.use('/promotions', promoRouter);
app.use('/promotions/:promoId', promoRouter);

app.use('/leaders', leaderRouter);
app.use('/leaders/:leaderId', leaderRouter);






// serve up the static files from double underscore dirname
//check root folder inside public
app.use(express.static(__dirname + '/public'));

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