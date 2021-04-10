const Team = require('./team')
const errorHandler = require('../errors/errorHandler')

Team.methods(['get', 'post', 'put', 'delete'])
Team.updateOptions({ new: true, runValidators: true })
Team.after('post', errorHandler).after('put', errorHandler)

Team.route('age_average', (req, res, next) => {
    Team.aggregate([{ 
        $project: {totalAge: {$sum: "$players.age"}, countPlayers: {$count: "$players.player_id"}} 
    }]).exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0])
        }
    })
})

module.exports = Team