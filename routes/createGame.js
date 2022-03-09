const express = require("express");
const Game = require("../models/game");
const router = express.Router();

const createGamer = require("../util/createGamer");

/* por medio del post se envila informacion para crear la partida en la base de datos mongo */
router.post("/", function (req, res, next) {
  createGamer(req.body.gamers).then((gamers) => {
    const idList = gamers.map((gamer) => gamer.id);
    const game = new Game({
      id: req.body.id,
      type: req.body.type,
      gamers: idList,
    });
    game.save()
    .then(result => res.json(result))
    .catch(err=>res.json(err));
  });
});

module.exports = router;
