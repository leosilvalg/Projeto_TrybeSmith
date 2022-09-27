import express from 'express';
import USER_CONTROLLER from '../controllers/users.controller';

const USERS_ROUTES = express.Router();

USERS_ROUTES.post('/', USER_CONTROLLER.create);

export default USERS_ROUTES;