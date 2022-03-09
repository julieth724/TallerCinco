const Gamer = require("../models/gamer");

/*Funcion para crear usuario*/

const createGamer = (gamers) => {
  return Promise.all(
    gamers.map(async (name) => {
      const gamer = new Gamer({
        name: name,
      });
      try {
        return gamer.save();
      } catch (err) {
        return error;
      }
    })
  );
};

module.exports = createGamer;
