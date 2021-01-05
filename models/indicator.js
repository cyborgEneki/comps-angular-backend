const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const indicatorSchema = new Schema({
	statement: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	units: {
		type: String,
		required: true,
	},
	dataSource: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	initiative: {
		type: String,
		required: true,
	}
	// initiative: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "Author"
	// },
});

module.exports = mongoose.model("Indicator", indicatorSchema);
