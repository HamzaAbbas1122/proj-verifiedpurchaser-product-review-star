import express from 'express';
import { Request, Response } from 'express';
import { User, Order, OrderItem, Product } from '../models/index';
import { UserService } from '../services/UserService';
import { OrderService } from '../services/OrderService';
import { OrderItemService } from '../services/OrderItemService';
import { ProductService } from '../services/ProductService';
import { ReviewService } from '../services/ReviewService';
import { OrderStatus } from '../models/orderStatus';

const router = express.Router();

// Get all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await UserService.getById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await UserService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const user = await UserService.update(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await UserService.deleteById(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all orders for a user
router.get('/:id/orders', async (req: Request, res: Response) => {
  try {
    const orders = await UserService.getOrdersForUser(req.params.id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default UserController;

