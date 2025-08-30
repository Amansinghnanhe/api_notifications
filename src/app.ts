import express from 'express';
import dotenv from 'dotenv';

import productRoutes from './routes/product.routes';
import notificationRouter from './routes/notification.routes';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get('/health', (_req, res) => res.json({ ok: true }));

// Mount the product routes at /api/products
app.use('/api/products', productRoutes);

// Mount the notification routes at /api/notifications
app.use('/api/notifications', notificationRouter);

export default app;
