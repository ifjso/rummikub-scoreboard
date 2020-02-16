const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const historesRouter = require('./api/histories');

dotenv.config();

mongoose.connect(process.env.DB_HOST, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once('open', () =>
  console.info(`connected to database: ${process.env.DB_HOST}`)
);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/histories', historesRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json(err);
});

module.exports = app;
