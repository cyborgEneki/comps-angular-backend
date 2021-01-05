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
        indicators: [Indicator!]
    }
    type GoalTeam {
        _id: ID!
        name: String!
    }
    type Indicator {
        _id: ID!
        statement: String!
        description: String!
        label: String!
        units: String!
        dataSource: String!
        type: String!
        initiative: Initiative!
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
    input EditInitiativeInputData {
        id: ID!
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
        indicators: IndicatorData!
        indicator(_id: ID!): Indicator!
        initiativePathwayIndicators(initiative: String!): IndicatorData!
        initiativeOutcomeIndicators(initiative: String!): IndicatorData!
    }
    type RootMutation {
        createInitiative(initiativeInput: InitiativeInputData): Initiative!
        updateInitiative(initiativeInput: EditInitiativeInputData): Initiative!
        createGoalTeam(goalTeamInput: GoalTeamInputData): GoalTeam!
        createIndicator(indicatorInput: IndicatorInputData): Indicator!
        deleteIndicator(id: ID!): Indicator!
        deleteInitiative(id: ID!): Initiative!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);