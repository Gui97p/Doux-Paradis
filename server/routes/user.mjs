import { Router } from 'express';

// import all controllers
import userController from '../controllers/userController.mjs';

const routes = new Router();

// Add routes
routes.get('/', userController.getAllUsers)
routes.get('/:id', userController.getOneUser)
routes.get('/passwordCheck/:id', userController.checkPassword)
routes.post('/', userController.register);
routes.post('/login', userController.login);
routes.put('/:id', userController.updateUser)
routes.delete('/:id', userController.deleteUser)

export default routes;