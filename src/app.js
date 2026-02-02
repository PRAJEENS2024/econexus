const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRouter = require('./routes/authRoutes');
const resourceRouter = require('./routes/resourceRoutes'); // <--- ADDED

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/resources', resourceRouter); // <--- ADDED

app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'ECONEXUS API is live!' });
});

module.exports = app;