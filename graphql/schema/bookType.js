const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const AuthorType = require('./authorType');
const data = require('../sample-data');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:{
        id: { type: GraphQLID },
        title: { type: GraphQLString},
        author: {
            type: AuthorType,
            resolve: (parent, args) => {

                //parent represent for the real object that store in db
                return data.AUTHORS.filter((author) => author.id === parent.authorId)
            }
        }
    }
});


module.exports = BookType;