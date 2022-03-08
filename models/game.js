const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mongooseSofDelete = require('mongoose-delete');
const Gamer = require("../models/gamer");

const gameSchema = new Schema({
    type :{
        type:Number,
        trim:true,
        required: [true, "el tipo es requerido"],
    },
    gamers :{
        type: [{
            type:String,
            trim:true,
            required: [true, "el id es requerido"],
        }],
        required: [true, "los jugadores son requeridos"],
    },
    winer: {
        type: String,
        trim:true,
        required: [true, "el tipo es requerido"],
    }
}, {timestamp: true}); 

gameSchema.plugin(mongooseSofDelete);

module.exports = game = mongoose.model('Game', gameSchema);