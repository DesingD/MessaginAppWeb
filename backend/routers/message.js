const CreateChat = require('../controllers/message/CreateChat')
const GetChats = require('../controllers/message/GetChats')

const message = (app) => {
    app.get('/chat/create', (req,res) => {
        CreateChat(req,res)
    })
    app.get('/chats', (req,res) => {
        GetChats(req,res)
    })
}
module.exports = message