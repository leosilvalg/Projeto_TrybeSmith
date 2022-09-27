import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/users.interfaces';
import LOGIN from '../interfaces/login.interface';

interface LoginWithRow extends User, RowDataPacket { }

const USERS_MODEL = {
  create: async ({ username, classe, level, password }: User): Promise<User> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    const [result] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    return { id: result.insertId, username, classe, level, password };
  },

  getLogin: async ({ username, password }: LOGIN): Promise<User | undefined> => {
    const query = `SELECT * FROM Trybesmith.Users 
    WHERE username =? and password = ?;`;
    const [[result]] = await connection
      .execute<LoginWithRow[]>(query, [username, password]);
    return result;
  },
};

export default USERS_MODEL;