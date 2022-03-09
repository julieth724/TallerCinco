const express = require("express");
const Gamer = require("../models/gamer");
const router = express.Router();


/* por medio del metodo patch se atualiza la informacion de las apuesta de los jugadores para dar inicio a la partida*/
router.patch("/", function (req, res, next) {
  const idList = Object.keys(req.body.gamerBet);
  Promise.all(
    idList.map((id) => {
      const gamerBet = req.body.gamerBet[id];
      return Gamer.findByIdAndUpdate(id, { gamerBet });
    })
  )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
