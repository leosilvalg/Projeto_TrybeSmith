import express from 'express';
import LOGIN_CONTROLLER from '../controllers/login.controller';

const LOGIN_ROUTES = express.Router();

LOGIN_ROUTES.post('/', LOGIN_CONTROLLER.getLogin);

export default LOGIN_ROUTES;