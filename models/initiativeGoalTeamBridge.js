const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const initiativeGoalTeamBridgeSchema = new Schema({
    initiativeKey: {
        type: String,
        required: true
    },
    goalTeamKey: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('InitiativeGoalTeam', initiativeGoalTeamBridgeSchema);