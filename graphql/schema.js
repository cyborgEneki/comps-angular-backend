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
        goalTeam: GoalTeam!
    }
    type GoalTeam {
        _id: ID!
        name: String!
    }
    type InitiativeData {
        initiatives: [Initiative!]!
    }
    type GoalTeamData {
        goalTeams: [GoalTeam!]!
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
    input GoalTeamInputData {
        name: String!
    }
    type RootQuery {
        initiatives: InitiativeData!
        goalTeams: GoalTeamData!
    }
    type RootMutation {
        createInitiative(initiativeInput: InitiativeInputData): Initiative!
        createGoalTeam(goalTeamInput: GoalTeamInputData): GoalTeam!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)