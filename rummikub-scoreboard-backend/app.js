const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const historesRouter = require('./api/histories');
const usersRouter = require('./api/users');
const schema = require('./graphql/schema');

dotenv.config();

mongoose.connect(process.env.DB_HOST, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.connection.once('open', () =>
  console.info(`connected to database: ${process.env.DB_HOST}`)
);

const server = new ApolloServer({
  schema,
  playground: true
});

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(`${__dirname}/public`));

const { API_CONTEXT } = process.env;
app.use(`${API_CONTEXT}/histories`, historesRouter);
app.use(`${API_CONTEXT}/users`, usersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json(err);
});

server.applyMiddleware({ app });

module.exports = app;
