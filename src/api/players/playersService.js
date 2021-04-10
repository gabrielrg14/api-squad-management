const Players = require('./players')
const errorHandler = require('../errors/errorHandler')

Players.methods(['get', 'post', 'put', 'delete'])
Players.updateOptions({ new: true, runValidators: true })
Players.after('post', errorHandler).after('put', errorHandler)

module.exports = Players