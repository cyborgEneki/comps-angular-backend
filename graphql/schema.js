const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Initiative {
        _id: ID!
        name: String!
        leadName: String!
        leadEmail: String!
        startYear: String!
        endYear: String!
        statement: String!
    }
    type InitiativeData {
        initiatives: [Initiative!]!
    }
    type RootQuery {
        initiatives: InitiativeData!
    }
    schema {
        query: RootQuery
    }
`)