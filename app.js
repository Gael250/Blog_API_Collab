const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs');
const categoryRoutes = require('./routes/categories');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
