const express = require('express');
const app = express();

const authRoutes = require('./Routes/auth.js')
const userRoutes = require('./Routes/users.js');
const blogRoutes = require('./Routes/blogs.js');
const categoryRoutes = require('./Routes/categories.js');

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
