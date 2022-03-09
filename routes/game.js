const express = require("express");
const Game = require("../models/game");
const router = express.Router();

const getGame = require("../util/getGame");
const getUser = require("../util/getGamer");

/* por medio del metodo get se capturan el juego creado para dar inicio a la partida */
router.get("/:id", function (req, res, next) {
  getGame(req.params.id)
    .then((game) => res.json(game))
    .catch((err) => res.json(err));
});

router.patch("/:id/setWinner", function (req, res, next) {
  Game.findByIdAndUpdate(req.params.id, { winner: req.body.gamerId })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
