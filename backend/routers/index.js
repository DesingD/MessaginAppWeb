const authRoutes = require('./auth')
const confirmRoutes = require('./confirm')
module.exports = (app) => {

    authRoutes(app)
    confirmRoutes(app)
}
