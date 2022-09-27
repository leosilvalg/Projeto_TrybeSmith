import express from 'express';
import PRODUCTS_CONTROLLER from '../controllers/products.controller';
import productValidation from '../middlewares/product.validation';

const PRODUCTS_ROUTE = express.Router();

PRODUCTS_ROUTE.post(
  '/', 
  productValidation.NAME_VALIDATION, 
  productValidation.AMOUNT_VALIDATION, 
  PRODUCTS_CONTROLLER.create,
);
PRODUCTS_ROUTE.get('/', PRODUCTS_CONTROLLER.getAll);

export default PRODUCTS_ROUTE;