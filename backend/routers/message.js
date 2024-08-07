const CreateChat = require('../controllers/message/CreateChat')
const message = (app) => {
    app.get('/chat/create', (req,res) => {
        CreateChat(req,res)
    })
}
module.exports = message