import { Request, Response } from 'express';
import ORDER_SERVICE from '../services/order.services';

const ORDERS_CONTROLLER = {
  getAll: async (req: Request, res: Response): Promise<Response> => {
    const ALL_ORDERS = await ORDER_SERVICE.getAll();
    return res.status(200).send(ALL_ORDERS);
  },
};

export default ORDERS_CONTROLLER;
