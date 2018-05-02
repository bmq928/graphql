const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields:{
        name: {type: GraphQLString},
        id : {type: GraphQLID}
    }
});

module.exports = AuthorType;