const restful = require('node-restful')
const mongoose = restful.mongoose

const playerSchema = new mongoose.Schema({
    player_id: { type: String },
    name: { type: String },
    age: { type: Number, min: 0, max: 100 },
    nacionality: { type: String }
})

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    formation: { type: String, required: true, 
        enum: ['3 - 2 - 2 - 3', '3 - 2 - 3 - 1', '3 - 4 - 3', 
            '3 - 5 - 2', '4 - 2 - 3 - 1', '4 - 3 - 1 - 1', 
            '4 - 3 - 2', '4 - 4 - 2', '4 - 5 - 1', '5 - 4 -1'] },
    website: { type: String, required: true },
    type: { type: String, required: true, enum: ['Real', 'Fantasy'] },
    tags: { type: Array },
    players: [playerSchema]
})

module.exports = restful.model('Team', teamSchema)