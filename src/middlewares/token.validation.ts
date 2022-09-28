import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import USERS_MODEL from '../models/users.models';

const secret = 'secret';

const GET_TOKEN_FROM_HEADER = (req: Request) => {
  const { authorization } = req.headers;
  return authorization;
};

const unauthorized = (res: Response, message: string) => res.status(401).json({ message });

function tokenFailed(err: { name: string; message: string }) { 
  return err.name && ['TokenExpiredError', 'JsonWebTokenError']
    .some((e) => e === err.name);
}

export default async function tokenValidation(req: Request, res: Response, next: NextFunction) {
  try {
    const token = GET_TOKEN_FROM_HEADER(req);
    if (!token) return unauthorized(res, 'Token not found');

    const DECODE = jwt.verify(token, secret) as { payload: number };
    const user = await USERS_MODEL.getById(DECODE.payload);
    if (!user) return unauthorized(res, 'Erro ao procurar usuário do token.');

    res.locals = { userId: user.id };
    next();
  } catch (err: any) {
    if (tokenFailed(err)) {
      return unauthorized(res, 'Invalid token');
    }
    return res.status(401).json({ message: err.message });
  }
}
