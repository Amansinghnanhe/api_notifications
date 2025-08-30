import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/db';
import notificationRoutes from './routes/notification.routes';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;


app.use(express.json());


app.use('/api/notifications', notificationRoutes);


app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});


async function startServer() {
  try {
    // Test DB connection
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
