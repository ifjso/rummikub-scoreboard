const { mergeSchemas } = require('graphql-tools');
const userSchema = require('./userSchema');

const mergedSchema = mergeSchemas({ schemas: [userSchema] });

module.exports = mergedSchema;
