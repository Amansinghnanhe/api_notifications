import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from './routes/product.routes';
import notificationRouter from './routes/notification.routes';

dotenv.config();

const app = express();


// Mount the product routes at /api/products
app.use('/api/products', productRoutes);

// Mount the notification routes at /api/notifications
app.use('/api/notifications', notificationRouter);

export default app;
