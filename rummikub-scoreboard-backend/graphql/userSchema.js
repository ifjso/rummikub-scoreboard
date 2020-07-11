const { makeExecutableSchema } = require('graphql-tools');
const { ApolloError } = require('apollo-server-express');
const User = require('../models/user');
const History = require('../models/history');

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

  input UserInput {
    score: Int!
    emojiType: Int!
    memo: String!
  }

  type Mutation {
    updateUser(owner: Int!, userInput: UserInput!): User
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
  },

  Mutation: {
    updateUser: async (_, { owner, userInput }) => {
      const { score, emojiType, memo } = userInput;
      const updatedAt = Date.now();

      const user = await User.findOneAndUpdate({ owner }, { score, updatedAt });
      if (!user) {
        throw new ApolloError(`${owner} not found.`, 404);
      }

      await History.create({
        owner,
        value: score - user.score,
        emojiType,
        memo
      });

      return { ...user.toObject(), score, updatedAt };
    }
  }
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
