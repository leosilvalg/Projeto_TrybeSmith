import express from 'express';
import PRODUCTS_ROUTE from './routes/products.routes';
import USERS_ROUTES from './routes/users.routes';
import ORDERS_ROUTE from './routes/orders.routes';
import LOGIN_ROUTES from './routes/login.routes';
import LOGIN_VALIDATION from './middlewares/login.validation';

const app = express();

app.use(express.json());

app.use('/products', PRODUCTS_ROUTE);
app.use('/users', USERS_ROUTES);
app.use('/orders', ORDERS_ROUTE);
app.use('/login', LOGIN_VALIDATION, LOGIN_ROUTES);

export default app;
