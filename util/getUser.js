const Gamer = require("../models/gamer");

const getUser = async (id) => {
    try {
        const gamers = await Gamer.find({_id: id})
        return gamers[0]._doc
    } catch (error) {
        return error
    }
};

module.exports = getUser
