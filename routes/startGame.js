const express = require("express");
const Gamer = require("../models/gamer");
const router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  let respondList = [];
  for (let id in req.body.gamerBet) {
    const gamerBet = req.body.gamerBet[id];
    const respond = Gamer.findByIdAndUpdate(id, { gamerBet });
    respondList.push(respond);
  }
  Promise.all(respondList)
    .then((res = res.json(res)))
    .catch((err) => res.json(err));
});

module.exports = router;
