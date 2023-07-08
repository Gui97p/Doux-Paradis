import { Router } from 'express';

// import all controllers
import productsController from '../controllers/productsController.mjs';

const routes = new Router();

// Add routes
routes.get('/', productsController.getAllProducts);
routes.get('/:id', productsController.GetOneProduct)
routes.post('/', productsController.insertProduct)
routes.put('/:id', productsController.updateProduct)
routes.delete('/:id', productsController.deleteProduct)

export default routes;