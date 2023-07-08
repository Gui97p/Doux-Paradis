import { Router } from 'express';

// import all controllers
import productsController from '../controllers/productsController.mjs';

const routes = new Router();

// Add routes
routes.get('/', productsController.getAllProducts);
routes.post('/add', productsController.insertProduct)
// routes.put('/update', productsController.updateProduct)
// routes.delete('/del', productsController.deleteProduct)

export default routes;