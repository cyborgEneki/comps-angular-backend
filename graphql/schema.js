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
        goalTeam: String!
    }
    type InitiativeData {
        initiatives: [Initiative!]!
    }
    input InitiativeInputData {
        name: String!
        leadName: String!
        leadEmail: String!
        startYear: String!
        endYear: String!
        statement: String!
        goalTeam: String!
    }
    type RootQuery {
        initiatives: InitiativeData!
    }
    type RootMutation {
        createInitiative(initiativeInput: InitiativeInputData): Initiative!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)