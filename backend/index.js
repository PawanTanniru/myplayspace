const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookmybox')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});