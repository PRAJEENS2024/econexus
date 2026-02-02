const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Import Routes
const authRouter = require('./routes/authRoutes');

const app = express();

// 1) Global Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// 2) Routes
app.use('/api/v1/auth', authRouter);

// 3) Test Route (Optional)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'ECONEXUS API is live and running!'
  });
});

module.exports = app;