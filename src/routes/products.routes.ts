import express from 'express';
import PRODUCTS_CONTROLLER from '../controllers/products.controller';

const PRODUCTS_ROUTE = express.Router();

PRODUCTS_ROUTE.post('/', PRODUCTS_CONTROLLER.create);
PRODUCTS_ROUTE.get('/', PRODUCTS_CONTROLLER.getAll);

export default PRODUCTS_ROUTE;