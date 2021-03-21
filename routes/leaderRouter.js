const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    //would be done for all the requests, get, put, post, and delete, on the dishes
    .all(((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }))

    .get((req, res, next) => {
        res.end(' We will send all the leaders to you!');

    })

    .post((req, res, next) => {
        res.end('will add the leader: ' + req.body.name + ' with details: ' + req.body.description);

    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders ');
    })

    .delete((req, res, next) => {
        res.end('Deleting all the leaders!');

    });

leaderRouter.route('/:leaderId')
    //would be done for all the requests, get, put, post, and delete, on the dishes
    .all(((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }))

    .get((req, res, next) => {
        res.end(`will send  details of ${req.params.leaderId} to you!`);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /leaders/${req.params.leaderId}`);

    })

    .put((req, res, next) => {
        res.write(`Updating the leader ${req.params.leaderId} \n`);
        res.end(`will update the leader ${req.body.name} with details ${req.body.description}`);
    })

    .delete((req, res, next) => {
        res.end(`deleting leader : ${req.params.leaderId}`);
    });




module.exports = leaderRouter;
