import { Router } from 'express';

// import all controllers
import productsController from '../controllers/productsController.mjs';

const routes = new Router();

// Add routes
routes.get('/', productsController.getAll);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

//module.exports = routes;
export default routes;