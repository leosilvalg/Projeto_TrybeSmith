import express from 'express';
import ORDERS_CONTROLLER from '../controllers/order.controller';

const ORDERS_ROUTE = express.Router();

ORDERS_ROUTE.get('/', ORDERS_CONTROLLER.getAll);

export default ORDERS_ROUTE;