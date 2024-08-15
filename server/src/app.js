import flightRoutes from './routes/flightRoutes.js';
import express from 'express';
import cors from 'cors';
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use('/flights/api/v1', flightRoutes);

export default app;
