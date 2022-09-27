import { Request, Response } from 'express';
import LOGIN_SERVICES from '../services/login.services';

const LOGIN_CONTROLLER = {
  getLogin: async (req: Request, res: Response): Promise<Response> => {
    const token = await LOGIN_SERVICES.getLogin(req.body);
    if (!token) {
      return res.status(401).json({
        message: 'Username or password invalid',
      });
    }
    return res.status(200).send({ token });
  },
};

export default LOGIN_CONTROLLER;