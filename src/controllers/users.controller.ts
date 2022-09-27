import { Request, Response } from 'express';
import USERS_SERVICES from '../services/users.services';

const USER_CONTROLLER = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const token = await USERS_SERVICES.create(req.body);
    return res.status(201).send({ token });
  },
};

export default USER_CONTROLLER;