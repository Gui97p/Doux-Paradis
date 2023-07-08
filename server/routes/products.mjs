import { Router } from 'express';

// import all controllers
import productsController from '../controllers/productsController.mjs';

const routes = new Router();

// Add routes
routes.get('/', productsController.getAll);
routes.post('/add', productsController.InsertProduct)

export default routes;