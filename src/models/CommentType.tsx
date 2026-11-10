import { Comment, CommentService } from '../services/CommentService';
import { User, UserService } from '../services/UserService';
import { Post, PostService } from '../services/PostService';
import { Product, ProductService } from '../services/ProductService';
import { Order, OrderService } from '../services/OrderService';
import { Review, ReviewService } from '../services/ReviewService';
import { CommentType } from '../models/CommentType';

// Define CommentType model
export class CommentType {
  id: string;
  name: string;
  created_at: Date;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.created_at = new Date(data.created_at);
  }

  static async getAll(): Promise<CommentType[]> {
    const commentTypes = await CommentService.getAll();
    return commentTypes.map(commentType => new CommentType(commentType));
  }

  static async getById(id: string): Promise<CommentType> {
    const commentType = await CommentService.getById(id);
    return new CommentType(commentType);
  }

  static async create(data: any): Promise<CommentType> {
    const commentType = await CommentService.create(data);
    return new CommentType(commentType);
  }

  static async update(data: any): Promise<CommentType> {
    const commentType = await CommentService.update(data);
    return new CommentType(commentType);
  }

  static async delete(id: string): Promise<void> {
    await CommentService.delete(id);
  }

  static async getByPostId(postId: string): Promise<CommentType[]> {
    const commentTypes = await CommentService.getByPostId(postId);
    return commentTypes.map(commentType => new CommentType(commentType));
  }

  static async getByProductId(productId: string): Promise<CommentType[]> {
    const commentTypes = await CommentService.getByProductId(productId);
    return commentTypes.map(commentType => new CommentType(commentType));
  }

  static async getByReviewId(reviewId: string): Promise<CommentType[]> {
    const commentTypes = await CommentService.getByReviewId(reviewId);
    return commentTypes.map(commentType => new CommentType(commentType));
  }

  static async getByOrderId(orderId: string): Promise<CommentType[]> {
    const commentTypes = await CommentService.getByOrderId(orderId);
    return commentTypes.map(commentType => new CommentType(commentType));
  }

  static async getByPostReviewId(postReviewId: string): Promise<CommentType[]> {
    const commentTypes = await CommentService.getByPostReviewId(postReviewId);
    return commentTypes.map(commentType => new CommentType(commentType));
  }

  static

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CommentType</h1>
    </div>
  );

};

export default CommentType;

