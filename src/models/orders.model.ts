import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Order from '../interfaces/order.interface';

interface OrderWithRow extends Order, RowDataPacket { }

const ORDER_MODEL = {
  getAll: async (): Promise<Order[]> => {
    const [result] = await connection
      .execute<OrderWithRow[]>('SELECT * FROM Trybesmith.Orders; ');
    return result;
  },
};

export default ORDER_MODEL;
