import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/users.interfaces';

const USERS_MODEL = {
  create: async ({ username, classe, level, password }: User): Promise<User> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    const [result] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    return { id: result.insertId, username, classe, level, password };
  },
};

export default USERS_MODEL;