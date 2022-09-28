import { Request, Response } from 'express';
import ORDER_SERVICE from '../services/order.services';

const ORDERS_CONTROLLER = {
  getAll: async (req: Request, res: Response): Promise<Response> => {
    const ALL_ORDERS = await ORDER_SERVICE.getAll();
    return res.status(200).send(ALL_ORDERS);
  },

  create: async (req: Request, res: Response): Promise<Response> => {
    const { userId } = res.locals;
    const ORDER = await ORDER_SERVICE.create({ productsIds: req.body.productsIds, userId });
    return res.status(201).send(ORDER);
  },
};

export default ORDERS_CONTROLLER;
