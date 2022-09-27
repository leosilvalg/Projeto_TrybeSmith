import Product from '../interfaces/products.interface';
import PRODUCTS_MODEL from '../models/products';

const PRODUCTS_SERVICE = {
  create: async ({ name, amount }: Product): Promise<Product> => {
    const PRODUCT = await PRODUCTS_MODEL.create({ name, amount });
    return PRODUCT;
  },
};

export default PRODUCTS_SERVICE;
