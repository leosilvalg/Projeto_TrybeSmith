import LOGIN from '../interfaces/login.interface';
import USERS_MODEL from '../models/users.models';
import TOKEN_SERVICE from './token.service';

const LOGIN_SERVICES = {
  getLogin: async ({ username, password }: LOGIN): Promise<string | null> => {
    const USER = await USERS_MODEL.getLogin({ username, password });
    if (USER && USER.id) {
      const TOKEN = await TOKEN_SERVICE.createToken(USER.id);
      return TOKEN;
    }
    return null;
  },
};

export default LOGIN_SERVICES;