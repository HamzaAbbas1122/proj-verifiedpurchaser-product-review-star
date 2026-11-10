import { Model } from 'sequelize';

export interface OrderStatusAttributes {
  id: string;
  userId: string;
  orderId: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  deliveredAt: Date;
}

export interface OrderStatusInstance extends OrderStatusAttributes, Model {
  user: User;
  order: Order;
  product: Product;
}

export class OrderStatus extends Model<OrderStatusAttributes, OrderStatusInstance> {
  static associate(models: any) {
    this.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    this.belongsTo(models.Order, { as: 'order', foreignKey: 'orderId' });
    this.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
  }
}

export default OrderStatus;
