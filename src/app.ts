import express from 'express';
import PRODUCTS_ROUTE from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', PRODUCTS_ROUTE);

export default app;
