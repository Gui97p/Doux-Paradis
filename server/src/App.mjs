import express from 'express';

import products from '../routes/products.mjs';

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
  }
}

export default new App().server;
