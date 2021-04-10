const mongoose = require('mongoose')

mongoose.Promise = global.Promise // Promise do mongoose depreciada

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/squad_management'
module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "The field {PATH} is required."
mongoose.Error.messages.Number.min = "{VALUE} is less than the minimum limit of {MIN}."
mongoose.Error.messages.Number.max = "{VALUE} is greater than the maximum limit of {MAX}."