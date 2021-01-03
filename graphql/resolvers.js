const Initiative = require("../models/initiative");
const GoalTeam = require("../models/goalTeam");

module.exports = {
	goalTeam: async (goalTeamId) => {
		try {
			const goalTeam = await GoalTeam.findById(goalTeamId);
			return {
				...goalTeam._doc,
			};
		} catch (err) {
			throw err;
		}
	},
	initiative: async (initiativeId) => {
		try {
			const initiative = await Initiative.findById(initiativeId);
			const goalTeamRecord = await GoalTeam.findById(initiative.goalTeam);

			return {
				...initiative._doc,
				goalTeam: goalTeamRecord,
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
	updateInitiative: async function (id, { initiativeInput }) {
		const initiative = new Initiative({
			name: initiativeInput.name,
			leadName: initiativeInput.leadName,
			leadEmail: initiativeInput.leadEmail,
			startYear: initiativeInput.startYear,
			endYear: initiativeInput.endYear,
			statement: initiativeInput.statement,
			goalTeam: initiativeInput.goalTeam,
		});

		const updatedInitiative = await initiative.findByIdAndUpdate(id, initiative);
		const goalTeamRecord = await GoalTeam.findById(initiative.goalTeam);

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
};
