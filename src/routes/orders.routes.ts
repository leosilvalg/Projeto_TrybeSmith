import express from 'express';
import ORDERS_CONTROLLER from '../controllers/order.controller';
import ORDER_VALIDATION from '../middlewares/order.validation';
import tokenValidation from '../middlewares/token.validation';

const ORDERS_ROUTE = express.Router();

ORDERS_ROUTE.get('/', ORDERS_CONTROLLER.getAll);
ORDERS_ROUTE.post('/', tokenValidation, ORDER_VALIDATION, ORDERS_CONTROLLER.create);

export default ORDERS_ROUTE;