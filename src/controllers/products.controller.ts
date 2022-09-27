import { Request, Response } from 'express';
import PRODUCTS_SERVICE from '../services/products.services';

const PRODUCTS_CONTROLLER = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const PRODUCT = await PRODUCTS_SERVICE.create(req.body);
    return res.status(201).send(PRODUCT);
  },
  getAll: async (req: Request, res: Response): Promise<Response> => {
    const ALL_PRODUCTS = await PRODUCTS_SERVICE.getAll();
    return res.status(200).send(ALL_PRODUCTS);
  },
};

export default PRODUCTS_CONTROLLER;
