const authRoutes = require('./auth')
const confirmRoutes = require('./confirm')
const messageRoutes = require('./message')
const userRoutes = require('./user')
module.exports = (app) => {

    authRoutes(app)
    confirmRoutes(app)
    messageRoutes(app)
    userRoutes(app)
    
}
