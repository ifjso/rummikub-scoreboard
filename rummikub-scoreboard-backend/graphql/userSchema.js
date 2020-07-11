const { makeExecutableSchema } = require('graphql-tools');
const { ApolloError } = require('apollo-server-express');
const User = require('../models/user');

const typeDefs = `
  type User {
    owner: Int!
    name: String!
    picture: String
    score: Int!
    createdAt: Float!
    updatedAt: Float!
  }

  type Query {
    user(owner: Int!): User
  }
`;

const resolvers = {
  Query: {
    user: async (_, { owner }) => {
      const user = await User.findOne({ owner });
      if (!user) {
        throw new ApolloError(`${owner} not found.`, 404);
      }

      return user;
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
