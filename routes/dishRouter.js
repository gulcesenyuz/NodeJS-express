const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    //would be done for all the requests, get, put, post, and delete, on the dishes
    .all(((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }))

    .get((req, res, next) => {
        res.end('will send all the dishes to you!');

    })

    .post((req, res, next) => {
        res.end('will add the dish: ' + req.body.name + ' with details: ' + req.body.description);

    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes ');
    })

    .delete((req, res, next) => {
        res.end('Deleting all the dishes!');

    });

dishRouter.route('/:dishId')
    //would be done for all the requests, get, put, post, and delete, on the dishes
    .all(((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }))

    .get((req, res, next) => {
        res.end(`will send  details of ${req.params.dishId} to you!`);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /dishes/${req.params.dishId}`);

    })

    .put((req, res, next) => {
        res.write(`Updating the dish ${req.params.dishId} \n`);
        res.end(`will update the dish ${req.body.name} with details ${req.body.description}`);
    })

    .delete((req, res, next) => {
        res.end(`deleting dish : ${req.params.dishId}`);
    });


module.exports = dishRouter;