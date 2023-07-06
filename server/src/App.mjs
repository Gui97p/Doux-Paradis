import express from 'express';

import products from '../routes/products.mjs';
import user from '../routes/user.mjs'

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/products', products);
    this.server.use('user', user);
  }
}

export default new App().server;
