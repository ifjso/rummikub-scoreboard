const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
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
  playground: process.env.ENV !== 'production'
});

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use('/static', express.static(`${__dirname}/public`));

server.applyMiddleware({ app });

module.exports = app;
