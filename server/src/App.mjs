import express from 'express';
import connect from './connection.mjs'

import products from '../routes/products.mjs';
import user from '../routes/user.mjs'
import bodyParser from 'body-parser';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    connect()

    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({extended: true}))

    this.server.use(function(req, res, next) {
      res.status(404).json('Route not found');
      next();
    })
  }

  routes() {
    this.server.use('/products', products);
    this.server.use('/users', user);
  }
}

export default new App().server;
