import { Model } from 'sequelize';

interface OrderTypeAttributes {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}

interface OrderTypeRelations {
  user: Model<User>;
  product: Model<Product>;
}

export default class OrderType extends Model<OrderTypeAttributes, OrderTypeRelations> {
  static associate(models: any) {
    this.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    this.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
  }

  static get orderTypes() {
    return this.findAll({
      attributes: ['id', 'userId', 'productId', 'quantity', 'createdAt', 'updatedAt', 'status'],
      include: [
        {
          model: models.User,
          as: 'user',
          through: {
            model: models.OrderItem,
            as: 'orderItems',
            through: {
              model: models.OrderItem,
              as: 'orderItems',
              through: {
                model: models.OrderItem,
                as: 'orderItems',
                through: {
                  model: models.OrderItem,
                  as: 'orderItems',
                  through: {
                    model: models.OrderItem,
                    as: 'orderItems',
                    through: {
                      model: models.OrderItem,
                      as: 'orderItems',
                      through: {
                        model: models.OrderItem,
                        as: 'orderItems',
                       through: {
