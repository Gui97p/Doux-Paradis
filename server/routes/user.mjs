import { Router } from 'express';

// import all controllers
import userController from '../controllers/userController.mjs';

const routes = new Router();

// Add routes
routes.post('/register', userController.register);
routes.post('/login', userController.login);

export default routes;