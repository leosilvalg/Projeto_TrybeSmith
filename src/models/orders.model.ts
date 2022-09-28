import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Order from '../interfaces/order.interface';

interface OrderWithRow extends Order, RowDataPacket { }

const ORDER_MODEL = {
  getAll: async (): Promise<Order[]> => {
    const [result] = await connection
      .execute<OrderWithRow[]>('SELECT * FROM Trybesmith.Orders; ');
    return result;
  },

  create: async (userId: number): Promise<Order> => {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?);';
    const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
    return { id: result.insertId, userId, productsIds: [] };
  },
};

export default ORDER_MODEL;
