const Initiative = require('../models/initiative');
const GoalTeam = require('../models/goalTeam');

module.exports = {
    initiatives: async function() {
        const initiatives = await Initiative.find();
        return {
            initiatives: initiatives.map((q) => {
                return {
                    ...q._doc,
                    _id: q._id.toString()
                }
            })
        }
    },
    createInitiative: async function({ initiativeInput }) {
        const initiative = new Initiative({
            name: initiativeInput.name,
            leadName: initiativeInput.leadName,
            leadEmail: initiativeInput.leadEmail,
            startYear: initiativeInput.startYear,
            endYear: initiativeInput.endYear,
            statement: initiativeInput.statement,
            goalTeam: initiativeInput.goalTeam
        })

        const createdInitiative = await initiative.save();
        return {
            ...createdInitiative._doc,
            _id: createdInitiative._id.toString() 
        }
    },
    goalTeams: async function() {
        const goalTeams = await GoalTeam.find();
        return {
            goalTeams: goalTeams.map((q) => {
                return {
                    ...q._doc,
                    _id: q._id.toString()
                }
            })
        }
    },
    createGoalTeam: async function({ goalTeamInput }) {
        const goalTeam = new GoalTeam({
            name: goalTeamInput.name
        })

        const createdGoalTeam = await goalTeam.save();
        return {
            ...createdGoalTeam._doc,
            _id: createdGoalTeam._id.toString() 
        }
    }
}