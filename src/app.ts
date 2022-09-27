import express from 'express';
import PRODUCTS_ROUTE from './routes/products.routes';
import USERS_ROUTES from './routes/users.routes';
import ORDERS_ROUTE from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', PRODUCTS_ROUTE);
app.use('/users', USERS_ROUTES);
app.use('/orders', ORDERS_ROUTE);

export default app;
