const matchsCtrl = require('./matchs.controller')

module.exports = [
    {
        method: 'GET',
        path: '/matchs',
        handler: matchsCtrl.listMatchs
    },
    {
        method: 'PUT',
        path: '/matchs',
        handler: matchsCtrl.addMatch
    }
]