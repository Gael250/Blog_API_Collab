import express from 'express';
import authRoutes from './blog-api/Routes/auth.js';
import userRoutes from './blog-api/Routes/users.js';
import blogRoutes from './blog-api/Routes/blogs.js';
import categoryRoutes from './blog-api/Routes/categories.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;