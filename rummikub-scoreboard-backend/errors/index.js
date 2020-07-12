const { ApolloError } = require('apollo-server-express');

class ResourceNotFound extends ApolloError {
  constructor(message) {
    super(message, 'RESOURCE_NOT_FOUND');
    Object.defineProperty(this, 'name', { value: 'ResourceNotFound' });
  }
}

module.exports = { ResourceNotFound };
