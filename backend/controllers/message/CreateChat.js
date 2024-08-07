const createId = require("../../utils/helpers/createId")
const { pool } = require('../../config/connectPostgres')

const CreateChat = async (req, res) => {

    try{
        const {token} = req.headers
        const {friendId} = req.body

        //validar que el token sea valido
        const data = jwt.decode(token)

        const id = createId()
        const UserId1 = data.user
        const UserId2 = friendId
        const chatName = `${UserId1}-${UserId2}`

        //crear el chat
        await pool.query('INSERT INTO chats (id, user_id1, user_id2, chat_name) VALUES ($1, $2, $3, $4)', [id, UserId1, UserId2, chatName])

        res.status(200).json({message: 'Chat created'})
    }catch(error){
        res.status(500).json({message: 'Error'})
    }
    

}

module.exports = CreateChat;