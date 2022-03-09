const Game = require("../models/game");
const getGamer = require("./getGamer");

/*Funcion para determinar ganador de partida*/


const getGame = async (id) => {
  try {
    const games = await Game.find({ id });
    const game = games[0]._doc;
    const gamers = await Promise.all(
      game.gamers.map((idUser) => {
        return getGamer(idUser);
      })
    );
    const winner = game.winner && (await getGamer(game.winner));
    return {
      ...game,
      gamers,
      inProgress: !game.winner,
      winner,
    };
  } catch (error) {
    return error;
  }
};

module.exports = getGame;
