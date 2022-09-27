import User from '../interfaces/users.interfaces';
import USERS_MODEL from '../models/users.models';
import TOKEN_SERVICE from './token.service';

const USERS_SERVICES = {
  create: async ({ username, classe, level, password }: User): Promise<string | null> => {
    const USER = await USERS_MODEL.create({ username, classe, level, password });
    if (USER && USER.id) {
      const TOKEN = await TOKEN_SERVICE.createToken(USER.id);
      return TOKEN;
    }
    return null;
  },
};

export default USERS_SERVICES;
