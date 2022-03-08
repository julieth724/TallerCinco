const express = require("express");
const router = express.Router();

const getGame = require("../util/getGame");

/* GET users listing. */
router.get("/:id", function (req, res, next) {
  getGame(req.params.id)
    .then((game) => res.json(game))
    .catch((err) => res.json(err));
});

module.exports = router;
