/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error');

const bookRoute = require('./routes/book');
const userRoute = require('./routes/user');

//start Express app
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/admin/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// ROUTES
app.use('/api/v1/books', bookRoute);

app.use('/api/v1/users', userRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
