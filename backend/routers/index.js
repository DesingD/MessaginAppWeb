const authRoutes = require('./auth')
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World')
    })

    authRoutes(app)
}
