const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const initiativeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	leadName: {
		type: String,
		required: true,
	},
	leadEmail: {
		type: String,
		required: true,
	},
	startYear: {
		type: String,
		required: true,
	},
	endYear: {
		type: String,
		required: true,
	},
	statement: {
		type: String,
		required: true,
	},
	goalTeam: {
		type: String,
		required: true,
	},
	indicators: [{
		type: Schema.Types.ObjectId,
		ref: "Indicator",
	}]
});

module.exports = mongoose.model('Initiative', initiativeSchema);