const graphqlHttp = require('express-graphql');
const schema = require('./rootQuery');

const middleware = new graphqlHttp({
    schema,
    graphiql: true
})

module.exports = middleware;