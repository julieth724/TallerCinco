const Game = require("../models/game");
const getUser = require("../util/getUser");

const getGame = async (id) => {
  try {
    const games = await Game.find({ id });
    const game = games[0]._doc;
    const gamers = await Promise.all(
      game.gamers.map(async (id) => {
        const gamer = await getUser(id);
        return gamer;
      })
    );
    return {
      ...game,
      gamers,
      inProgress: !game.winner,
    };
  } catch (error) {
    return error;
  }
};

module.exports = getGame;
