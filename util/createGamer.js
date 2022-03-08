const Gamer = require("../models/gamer");

const createGamer = async (gamers) => {
   const resultGamer = await Promise.all(gamers.map(async (name) => {
    const gamer = new Gamer({
      name: name,
    });
    try {
      const result = await gamer.save();
      return result 
    } catch (err) {
      return error;
    }
  }));
  return resultGamer;
};

module.exports = createGamer
