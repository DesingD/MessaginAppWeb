const {pool} = require('../../config/connectPostgres')
const createID = require('../../utils/helpers/createId')
const SendMessage = (ws, connectedUsers) => {
    ws.on('message', async(message) => {
        const {sender_id, receiver_id, content} = JSON.parse(message);

        
        // Check if the receiver is connected
        if(connectedUsers[receiver_id]){
            // Send the message directly
            connectedUsers[receiver_id].send(JSON.stringify({ sender_id, content}))
        } else{
            // Save the message to the database
            const id = createID();
            await pool.query('INSERT INTO messages(id ,sender_id, receiver_id, message_text) VALUES($1, $2, $3, $4)', [id,sender_id, receiver_id, content])
            
        }
        console.log('received: %s', message)
        ws.send(`You send: ${message}`)
    })
}

module.exports = SendMessage;
