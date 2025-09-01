import { Request, Response } from 'express';
import Product from '../models/product.model';  


export const createProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, price } = req.body;

    
    if (!name || price === undefined) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    // Create product in DB
    const product = await Product.create({ name, price });

    // Return created product
    return res.status(201).json(product);

  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ error: 'Error creating product' });
  }
};

// Get all products
export const getAllProducts = async (_req: Request, res: Response): Promise<Response> => {
  try {
    // Fetch all products from DB
    const products = await Product.findAll();

    // Return product list
    return res.status(200).json(products);

  } catch (error) {
    console.error('Failed to fetch products:', error);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
};
