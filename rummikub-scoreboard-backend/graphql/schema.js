const { mergeSchemas } = require('graphql-tools');
const userSchema = require('./userSchema');
const historySchema = require('./historySchema');

const mergedSchema = mergeSchemas({ schemas: [userSchema, historySchema] });

module.exports = mergedSchema;
