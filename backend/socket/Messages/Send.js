const {pool} = require('../../config/connectPostgres')
const createID = require('../../utils/helpers/createId')
const searchChat = require('../../utils/helpers/socket/searchChat')
const SendMessage = (ws, connectedUsers) => {
    ws.on('message', async(message) => {
        const {sender_id, receiver_id, content} = JSON.parse(message);

        //search chat id
        const id_chat = await searchChat(sender_id, receiver_id);
        
        // Check if the receiver is connected
        if(connectedUsers[receiver_id]){
            // Send the message directly
            connectedUsers[receiver_id].send(JSON.stringify({ sender_id, content}))
            const id = createID();
            await pool.query(
              "INSERT INTO messages(id ,sender_id, receiver_id, chat_id ,message_text, read) VALUES($1, $2, $3, $4, $5, $6)",
              [id, sender_id, receiver_id, id_chat, content, false]
            );
        } else{
            // Save the message to the database
            const id = createID();
            await pool.query(
              "INSERT INTO messages(id ,sender_id, receiver_id, chat_id ,message_text, read) VALUES($1, $2, $3, $4, $5, $6)",
              [id, sender_id, receiver_id, id_chat, content, false]
            );
            
        }
        console.log('received: %s', message)
        ws.send(`You send: ${message}`)
    })
}

module.exports = SendMessage;
