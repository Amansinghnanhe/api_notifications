import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/db';
import notificationRoutes from './routes/notification.routes';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
// app.options("*", cors());
 
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend URL
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization","ngrok-skip-browser-warning",
 ],
    credentials: true,
  })
);

app.use(express.json());



app.use('/api/notifications', notificationRoutes);


// app.get('/health', (_req, res) => {
//   res.json({ status: 'ok' });
// });


async function startServer() {
  try {
    // Test DB connection
    await sequelize.authenticate();
    console.log('Database connected successfully.');


      app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
