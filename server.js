// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import Routes
const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

// Use Routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
