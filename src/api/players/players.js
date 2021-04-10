const restful = require('node-restful')
const mongoose = restful.mongoose

const playersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0, max: 100, required: true },
    nacionality: { type: String, required: true }
})

module.exports = restful.model('Players', playersSchema)