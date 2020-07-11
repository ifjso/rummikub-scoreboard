const { makeExecutableSchema } = require('graphql-tools');
const History = require('../models/history');
const User = require('../models/user');

const typeDefs = `
  type History {
    owner: Int!
    value: Int!
    emojiType: Int!
    memo: String
    createdAt: Float!
  }

  input PageInput {
    page: Int
    perPage: Int
  }

  type Query {
    histories(pageInput: PageInput): [History!]!
    hasNextPage(pageInput: PageInput): Boolean!
  }
`;

const resolvers = {
  Query: {
    histories: async (_, { pageInput }) => {
      const { page = 1, perPage = 30 } = pageInput || {};
      const histories = await History.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({ createdAt: -1 });
      const users = await User.find();

      histories.forEach(history => {
        const user = users.find(user => user.owner === history.owner);
        Object.assign(history, { name: user.name });
      });

      return histories;
    },

    hasNextPage: async (_, { pageInput }) => {
      const { page = 1, perPage = 30 } = pageInput || {};
      const historyCount = await History.count();
      const pageCount = Math.trunc((historyCount - 1) / perPage) + 1;

      return pageCount > page;
    }
  }
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
