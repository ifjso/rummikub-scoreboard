const { makeExcutableSchema } = require('graphql-tools');
const createError = require('http-errors');
const User = require('../models/user');

const typeDefs = `
  type User {
    owner: String!
    name: String!
    picture: String
    score: Int!
    createdAt: Long!
    updatedAt: Long!
  }

  type Query {
    user(owner: String!): User
  }
`;

const resolvers = {
  Query: {
    user: async (_, { owner }) => {
      const user = await User.find({ owner });
      if (!user) {
        throw new createError.NotFound(`${owner} not found.`);
      }

      return user;
    }
  }
};

module.exports = makeExcutableSchema({
  typeDefs,
  resolvers
});
