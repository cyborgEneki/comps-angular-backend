const Initiative = require("../models/initiative");
const GoalTeam = require("../models/goalTeam");
const Indicator = require("../models/indicator");

const indicators = async (indicatorIds) => {
	try {
		const indicators = await Indicator.find({
			_id: { $in: indicatorIds },
		});
		return indicators.map((indicator) => ({
			...indicator._doc,
			initiative: initiative.bind(this, indicator._doc.initiative),
		}));
	} catch {
		throw err;
	}
};

module.exports = {
	initiative: async (initiativeId) => {
		try {
			const initiative = await Initiative.findById(initiativeId);
			const goalTeamRecord = await GoalTeam.findById(initiative.goalTeam);

			return {
				...initiative._doc,
				goalTeam: goalTeamRecord,
				indicators: indicators.bind(this, initiative._doc.indicators),
			};
		} catch (err) {
			throw err;
		}
	},
	initiatives: async function () {
		const initiatives = await Initiative.find();
		return {
			initiatives: initiatives.map((q) => {
				const goalTeamRecord = GoalTeam.findById(q.goalTeam);

				return {
					...q._doc,
					_id: q._id.toString(),
					goalTeam: goalTeamRecord,
					indicators: indicators.bind(this, q._doc.indicators), //Ought to be an array of indicator ids
				};
			}),
		};
	},
	indicators: async () => {
		const indicators = await Indicator.find();
		return {
			indicators: indicators.map((q) => {
				const initiativeRecord = Initiative.findById(q.initiative);
				return {
					...q._doc,
					_id: q._id.toString(),
					initiative: initiativeRecord,
				};
			}),
		};
	},
	createInitiative: async function ({ initiativeInput }) {
		const initiative = new Initiative({
			name: initiativeInput.name,
			leadName: initiativeInput.leadName,
			leadEmail: initiativeInput.leadEmail,
			startYear: initiativeInput.startYear,
			endYear: initiativeInput.endYear,
			statement: initiativeInput.statement,
			goalTeam: initiativeInput.goalTeam,
		});

		const createdInitiative = await initiative.save();
		const goalTeamRecord = await GoalTeam.findById(initiative.goalTeam);

		return {
			...createdInitiative._doc,
			_id: createdInitiative._id.toString(),
			goalTeam: GoalTeam.bind(this, goalTeamRecord),
		};
	},
	updateInitiative: async function ({ initiativeInput }) {
		let updatedInitiative = await Initiative.findById(initiativeInput.id);
		updatedInitiative.name = initiativeInput.name;
		updatedInitiative.leadName = initiativeInput.leadName;
		updatedInitiative.leadEmail = initiativeInput.leadEmail;
		updatedInitiative.startYear = initiativeInput.startYear;
		updatedInitiative.endYear = initiativeInput.endYear;
		updatedInitiative.statement = initiativeInput.statement;
		updatedInitiative.goalTeam = initiativeInput.goalTeam;

		updatedInitiative = await updatedInitiative.save();

		const goalTeamRecord = await GoalTeam.findById(
			initiativeInput.goalTeam
		);

		return {
			...updatedInitiative._doc,
			_id: updatedInitiative._id.toString(),
			goalTeam: GoalTeam.bind(this, goalTeamRecord),
		};
	},
	goalTeams: async function () {
		const goalTeams = await GoalTeam.find();
		return {
			goalTeams: goalTeams.map((q) => {
				return {
					...q._doc,
					_id: q._id.toString(),
				};
			}),
		};
	},
	createGoalTeam: async function ({ goalTeamInput }) {
		const goalTeam = new GoalTeam({
			name: goalTeamInput.name,
		});

		const createdGoalTeam = await goalTeam.save();
		return {
			...createdGoalTeam._doc,
			_id: createdGoalTeam._id.toString(),
		};
	},
	createIndicator: async function ({ indicatorInput }) {
		const indicator = new Indicator({
			statement: indicatorInput.statement,
			description: indicatorInput.description,
			label: indicatorInput.label,
			units: indicatorInput.units,
			dataSource: indicatorInput.dataSource,
			type: indicatorInput.type,
			initiative: indicatorInput.initiative,
		});

		const createdIndicator = await indicator.save();
		const initiativeRecord = await Initiative.findById(
			indicatorInput.initiative
		);

		initiativeRecord.indicators.push(createdIndicator._id);
		await initiativeRecord.save();

		return {
			...createdIndicator._doc,
			_id: createdIndicator._id.toString(),
			initiative: Initiative.bind(this, initiativeRecord),
		};
	},
	initiativeIndicators: async function (initiativeId) {
		// It cannot see the indicators array for some reason
		const indicators = await Indicator.find({
			statement: { $eq: "statement1" },
		});

		return {
			indicators: indicators.map((q) => {
				const initiativeRecord = Initiative.findById(
					"5ff4a4a009da94c369218102"
				);

				return {
					...q._doc,
					_id: q._id.toString(),
					// initiative: initiativeRecord,
				};
			}),
		};
	}
};
