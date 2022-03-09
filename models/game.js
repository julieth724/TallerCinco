/* Realizacion del esquema para el jugador (gamer)*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseSofDelete = require("mongoose-delete");

const gameSchema = new Schema(
  {
    type: {
      type: String,
      trim: true,
      required: [true, "el tipo es requerido"],
    },
    gamers: {
      type: [
        {
          type: String,
          trim: true,
          required: [true, "el id es requerido"],
        },
      ],
      required: [true, "los jugadores son requeridos"],
    },
    winner: {
      type: String,
      trim: true,
    },
  },
  { timestamp: true }
);

gameSchema.plugin(mongooseSofDelete);

module.exports = game = mongoose.model("Game", gameSchema);
