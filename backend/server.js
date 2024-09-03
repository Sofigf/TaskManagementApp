import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js'; // Import dengan .js jika menggunakan ES Modules

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/taskmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/tasks', taskRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
