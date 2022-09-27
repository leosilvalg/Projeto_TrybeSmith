// import Order from '../interfaces/order.interface';
import PRODUCTS_MODEL from '../models/products.models';
import ORDER_MODEL from '../models/orders.model';

const ORDER_SERVICE = {
  getAll: async (): Promise<object> => {
    const ALL_ORDERS = await ORDER_MODEL.getAll();

    const RESULT = ALL_ORDERS.map(async (order) => {
      const { id, userId } = order;
      
      const PRODUCT_BY_ORDER = await PRODUCTS_MODEL.getByOrderId(Number(id));

      const productsIds = PRODUCT_BY_ORDER.map((product) => product.id);

      return { id, userId, productsIds }; 
    });
    return Promise.all(RESULT);
  },
};

export default ORDER_SERVICE;