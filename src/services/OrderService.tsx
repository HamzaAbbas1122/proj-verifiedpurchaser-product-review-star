import { Request, Response } from 'express';
import { Order, OrderStatus } from '../models/Order';
import { OrderItem, OrderItemStatus } from '../models/OrderItem';
import { Product, ProductType } from '../models/Product';
import { User, UserType } from '../models/User';
import { Comment, CommentType } from '../models/Comment';
import { Review, ReviewType } from '../models/Review';
import { OrderService } from './OrderService';
import { OrderItemService } from './OrderItemService';
import { ProductService } from './ProductService';
import { UserService } from './UserService';
import { CommentService } from './CommentService';
import { ReviewService } from './ReviewService';

interface OrderServiceInput {
  orderId: string;
  status: OrderStatus;
}

interface OrderItemServiceInput {
  orderItemId: string;
  status: OrderItemStatus;
}

interface ProductServiceInput {
  productId: string;
  type: ProductType;
}

interface UserServiceInput {
  userId: string;
  type: UserType;
}

interface CommentServiceInput {
  commentId: string;
  type: CommentType;
}

interface ReviewServiceInput {
  reviewId: string;
  type: ReviewType;
}

interface OrderServiceOutput {
  order: Order;
}

interface OrderItemServiceOutput {
  orderItem: OrderItem;
}

interface ProductServiceOutput {
  product: Product;
}

interface UserServiceOutput {
  user: User;
}

interface CommentServiceOutput {
  comment: Comment;
}

interface ReviewServiceOutput {
  review: Review;
}

interface OrderService {
  getOrderById: (input: OrderServiceInput) => Promise<OrderServiceOutput>;
  getOrderItemsByOrderId: (input: OrderServiceInput) => Promise<OrderItemServiceOutput[]>;
  getProductById: (input: ProductServiceInput) => Promise<ProductServiceOutput>;
  getUserById: (input: UserServiceInput) => Promise<UserServiceOutput>;
  getCommentById: (input: CommentServiceInput) => Promise<CommentServiceOutput>;
  getReviewById: (input: ReviewServiceInput) => Promise<ReviewServiceOutput>;
}

interface OrderItemService {
  getOrderItemById: (input: OrderItemServiceInput) => Promise<OrderItemServiceOutput>;
  getOrderItemsByOrderId: (input: OrderServiceInput) => Promise<OrderItemServiceOutput[]>;
  getProductById: (input: ProductServiceInput) => Promise<ProductServiceOutput>;
  getUserById: (input: UserServiceInput) => Promise<UserServiceOutput>;
  getCommentById: (input: CommentServiceInput) => Promise<CommentServiceOutput>;
  getReviewById: (input: ReviewServiceInput) => Promise<ReviewServiceOutput>;
}

interface ProductService {
  getProductById: (input: ProductServiceInput) => Promise<ProductServiceOutput>;
  getProductsByUserId: (input: UserServiceInput) => Promise<ProductServiceOutput[]>;
  getProductsByProductId: (input: ProductServiceInput) => Promise<ProductServiceOutput>;
  getProductsByCategoryId: (input: ProductServiceInput

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">OrderService</h1>
    </div>
  );

};

export default OrderService;

