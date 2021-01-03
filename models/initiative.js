const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const initiativeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    leadName: {
        type: String,
        required: true
    },
    leadEmail: {
        type: String,
        required: true
    },
    startYear: {
        type: String,
        required: true
    },
    endYear: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Initiative', initiativeSchema);