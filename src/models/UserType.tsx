import { Model } from 'sequelize';

export interface UserTypeAttributes {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserTypeRelations {
  orders: Model<Order>;
  reviews: Model<Review>;
}

export interface UserType extends Model<UserTypeAttributes>, UserTypeRelations {}

export const UserType = Model.define('user_type', {
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export const UserTypeInstanceMethods = {
  // Add custom methods here
};

export const UserTypeStaticMethods = {
  // Add custom static methods here
};

export default UserType;

