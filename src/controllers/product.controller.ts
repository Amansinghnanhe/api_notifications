import { Request, Response } from 'express';
import { Product } from '../models/product.model';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    if (!name || price === undefined) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const product = await Product.create({ name, price });
    return res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ error: 'Error creating product' });
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
};
