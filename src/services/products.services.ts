import Product from '../interfaces/products.interface';
import PRODUCTS_MODEL from '../models/products.models';

const PRODUCTS_SERVICE = {
  create: async ({ name, amount }: Product): Promise<Product> => {
    const PRODUCT = await PRODUCTS_MODEL.create({ name, amount });
    return PRODUCT;
  },

  getAll: async (): Promise<Product[]> => {
    const ALL_PRODUCTS = await PRODUCTS_MODEL.getAll();
    return ALL_PRODUCTS;
  },
};

export default PRODUCTS_SERVICE;
