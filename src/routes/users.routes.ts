import express from 'express';
import USER_CONTROLLER from '../controllers/users.controller';
import USER_VALIDATION from '../middlewares/user.validation';

const USERS_ROUTES = express.Router();

USERS_ROUTES.post(
  '/', 
  USER_VALIDATION.CLASSE_VALIDATION,
  USER_VALIDATION.LEVEL_VALIDATION,
  USER_VALIDATION.PASSWORD_VALIDATION,
  USER_VALIDATION.USERNAME_VALIDATION,
  USER_CONTROLLER.create,
);

export default USERS_ROUTES;