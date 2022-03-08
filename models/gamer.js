const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mongooseSofDelete = require('mongoose-delete');

const gamerSchema = new Schema({
    name :{
        type:String,
        trim:true,
        required: [true, "el nombre del usuario es requerido"],
    },
    gamerBet :{
        type:Number,
        trim:true,
    }    
}, {timestamp: true}); 

gamerSchema.plugin(mongooseSofDelete);

module.exports = gamer = mongoose.model('Gamer', gamerSchema);