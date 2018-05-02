const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLID } = require('graphql');
const BookType = require('./schema/bookType');
const AuthorType = require('./schema/authorType');
const data = require('./sample-data');

const rootQuery = new GraphQLObjectType({
    name: 'rootQueryType',
    fields:{
        books: {
            type: GraphQLList(BookType),
            args: {},
            resolve: (parent, args) => {
                return data.BOOKS;
            }
        },
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return data.BOOKS.filter(b => b.id === args.id)[0];
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: rootQuery
});