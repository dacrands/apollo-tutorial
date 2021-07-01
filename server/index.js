const { ApolloServer, gql } = require('apollo-server')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const books = [
    {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
    },
    {
        title: 'The Commanding Heights',
        author: 'Daniel Yergin',
    }
]

const resolvers = {
    Query: {
        books: () => books,
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})