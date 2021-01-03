const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const initiativeIndicatorBridgeSchema = new Schema({
    initiativeKey: {
        type: String,
        required: true
    },
    indicatorKey: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('InitiativeIndicator', initiativeIndicatorBridgeSchema);