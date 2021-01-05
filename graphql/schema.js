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
    type Indicator {
        statement: String!
        description: String!
        label: String!
        units: String!
        dataSource: String!
        type: String!
        initiative: String!
    }
    type InitiativeData {
        initiatives: [Initiative!]!
    }
    type GoalTeamData {
        goalTeams: [GoalTeam!]!
    }
    type IndicatorData {
        indicators: [Indicator!]!
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
    input IndicatorInputData {
        statement: String!
        description: String!
        label: String!
        units: String!
        dataSource: String!
        type: String!
        initiative: String!
    }
    type RootQuery {
        initiative(_id: ID!): Initiative!
        initiatives: InitiativeData!
        goalTeams: GoalTeamData!
    }
    type RootMutation {
        createInitiative(initiativeInput: InitiativeInputData): Initiative!
        updateInitiative(initiativeInput: InitiativeInputData): Initiative!
        createGoalTeam(goalTeamInput: GoalTeamInputData): GoalTeam!
        createIndicator(indicatorInput: IndicatorInputData): Indicator!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);