import express from 'express';
import { Router } from 'express';
import { jsonParser } from '../middlewares/jsonParser';
import { OrderItemService } from '../services/OrderItemService';

const router = Router();

router.post('/', jsonParser, async (req, res) => {
  try {
    const orderItem = await OrderItemService.create(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', jsonParser, async (req, res) => {
  try {
    const orderItems = await OrderItemService.getAll();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', jsonParser, async (req, res) => {
  try {
    const orderItem = await OrderItemService.getById(req.params.id);
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', jsonParser, async (req, res) => {
  try {
    const updatedOrderItem = await OrderItemService.updateById(req.params.id, req.body);
    res.json(updatedOrderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', jsonParser, async (req, res) => {
  try {
    await OrderItemService.deleteById(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
