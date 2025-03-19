const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');

require('dotenv').config();
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);




mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Basic route
app.get('/', (req, res) => {
  res.send('Laptops API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










