const express = require('express')

module.exports = function(server) {
    
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // PLAYERS Routes
    const playersService = require('../api/players/playersService')
    playersService.register(router, '/players')

    // TEAM Routes
    const teamService = require('../api/team/teamService')
    teamService.register(router, '/team')
}