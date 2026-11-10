import { Comment, CommentType } from '../models/Comment';
import { CommentType } from '../models/CommentType';
import { User, UserType } from '../models/User';
import { Post, PostType } from '../models/Post';
import { Product, ProductType } from '../models/Product';
import { Order, OrderType } from '../models/Order';
import { Review, ReviewType } from '../models/Review';
import { OrderItem, OrderItemType } from '../models/OrderItem';
import { OrderStatus } from '../models/OrderStatus';
import { CommentService } from './CommentService';
import { CommentTypeService } from './CommentTypeService';
import { UserService } from './UserService';
import { PostService } from './PostService';
import { ProductService } from './ProductService';
import { OrderService } from './OrderService';
import { ReviewService } from './ReviewService';
import { OrderItemService } from './OrderItemService';
import { OrderStatusService } from './OrderStatusService';

// ... (omitted for brevity)

class CommentService extends CommentService {
  async createComment(comment: Comment): Promise<Comment> {
    return await super.createComment(comment);
  }

  async getCommentsByPostId(postId: string): Promise<Comment[]> {
    return await super.getCommentsByPostId(postId);
  }

  async getCommentsByUserId(userId: string): Promise<Comment[]> {
    return await super.getCommentsByUserId(userId);
  }

  async getCommentsByProductId(productId: string): Promise<Comment[]> {
    return await super.getCommentsByProductId(productId);
  }

  async getCommentsByOrderId(orderId: string): Promise<Comment[]> {
    return await super.getCommentsByOrderId(orderId);
  }

  async getCommentsByReviewId(reviewId: string): Promise<Comment[]> {
    return await super.getCommentsByReviewId(reviewId);
  }

  async getCommentsByOrderItemId(orderItemId: string): Promise<Comment[]> {
    return await super.getCommentsByOrderItemId(orderItemId);
  }

  async getCommentsByUser(user: User): Promise<Comment[]> {
    return await super.getCommentsByUser(user);
  }

  async getCommentsByPost(post: Post): Promise<Comment[]> {
    return await super.getCommentsByPost(post);
  }

  async getCommentsByProduct(product: Product): Promise<Comment[]> {
    return await super.getCommentsByProduct(product);
  }

  async getCommentsByReview(review: Review): Promise<Comment[]> {
    return await super.getCommentsByReview(review);
  }

  async getCommentsByOrderItem(orderItem: OrderItem): Promise<Comment[]> {
    return await super.getCommentsByOrderItem(orderItem);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CommentService</h1>
    </div>
  );

};
};

export default CommentService;

