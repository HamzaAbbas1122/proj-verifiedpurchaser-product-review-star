import express from 'express';
import { ReviewService } from '../services/ReviewService';
import { UserService } from '../services/UserService';
import { ProductService } from '../services/ProductService';
import { OrderService } from '../services/OrderService';
import { OrderItemService } from '../services/OrderItemService';
import { Review } from '../models/Review';
import { User } from '../models/User';
import { Product } from '../models/Product';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

const router = express.Router();

const reviewService = new ReviewService();
const userService = new UserService();
const productService = new ProductService();
const orderService = new OrderService();
const orderItemService = new OrderItemService();

// Get all reviews
router.get('/', async (req, res) => {
  const userId = req.query.userId;
  const reviews = await reviewService.getReviewsByUserId(userId);
  res.json(reviews);
});

// Get a single review
router.get('/:reviewId', async (req, res) => {
  const reviewId = req.params.reviewId;
  const review = await reviewService.getReview(reviewId);
  res.json(review);
});

// Create a new review
router.post('/', async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const review = await reviewService.createReview(userId, productId, req.body.content);
  res.status(201).json(review);
});

// Update a review
router.put('/:reviewId', async (req, res) => {
  const reviewId = req.params.reviewId;
  const review = await reviewService.updateReview(reviewId, req.body.content);
  res.status(200).json(review);
});

// Delete a review
router.delete('/:reviewId', async (req, res) => {
  const reviewId = req.params.reviewId;
  await reviewService.deleteReview(reviewId);
  res.status(204).send();
});

// Get reviews for a product
router.get('/products/:productId', async (req, res) => {
  const productId = req.params.productId;
  const reviews = await reviewService.getReviewsForProduct(productId);
  res.json(reviews);
});

// Get reviews for a user
router.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const reviews = await reviewService.getReviewsForUser(userId);
  res.json(reviews);
});

// Get reviews for a product and user
router.get('/productsAndUsers/:productIdAndUserId', async (req, res) => {
  const productIdAndUserId = req.params.productIdAndUserId;
  const reviews = await reviewService.getReviewsForProductAndUser(productIdAndUserId);
  res.json(reviews);
});

export default ReviewController;

