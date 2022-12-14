import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/products.interface';

interface ProductWithRow extends Product, RowDataPacket { }

const PRODUCTS_MODEL = {
  create: async ({ name, amount }: Product): Promise<Product> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    return { id: result.insertId, name, amount };
  },

  getAll: async (): Promise<Product[]> => {
    const [result] = await connection
      .execute<ProductWithRow[]>('SELECT * FROM Trybesmith.Products; ');
    return result;
  },

  getByOrderId: async (id: number): Promise<Product[]> => {
    const [productsById] = await connection
      .execute<ProductWithRow[]>(
      'SELECT * FROM Trybesmith.Products WHERE orderId = ?', 
      [id],
    );
    return productsById;
  },

  update: async (id: number, orderId: number): Promise<number> => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await connection.execute<ResultSetHeader>(query, [orderId, id]);
    return id;
  },
};

export default PRODUCTS_MODEL;