const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// 1) Global Middleware
app.use(helmet());      // Set security HTTP headers
app.use(cors());        // Implement CORS
app.use(express.json()); // Body parser, reading data from body into req.body
app.use(morgan('dev'));  // Development logging

// 2) Test Route (We will delete this later)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'ECONEXUS API is live and running!'
  });
});

module.exports = app;