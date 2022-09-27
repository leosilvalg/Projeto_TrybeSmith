import User from '../interfaces/users.interfaces';
import USERS_MODEL from '../models/users.models';
import TOKEN_SERVICE from './token.service';

const USERS_SERVICES = {
  create: async ({ username, classe, level, password }: User): Promise<string> => {
    await USERS_MODEL.create({ username, classe, level, password });
    const TOKEN = await TOKEN_SERVICE.createToken(username);
    return TOKEN;
  },
};

export default USERS_SERVICES;
