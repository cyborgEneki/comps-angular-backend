const Initiative = require('../models/indicator');

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
    }
}