const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalTeamSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('GoalTeam', goalTeamSchema);