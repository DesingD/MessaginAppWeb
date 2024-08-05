const url = require('url')
const Verify = require('../utils/helpers/Tokens/Validate')
const SendMessage = require('./Messages/Send')
const {pool} = require('../config/connectPostgres')

const connection = (wss) => {
    const connectedUsers = {};

    wss.on('connection', async(ws, request) =>{
        const parsedUrl = url.parse(request.url, true);
        const params = parsedUrl.query;

        

        //Verify token
        const validationResponse = await Verify(params.Token);
        if (!validationResponse.validate) {
            ws.close(1008, validationResponse.message); // 1008: Policy Violation
            return;
        }

        const userId = validationResponse.data.user;
        connectedUsers[userId] = ws;

        console.log('Client connected', validationResponse.data.user);

        //Send stored messages to the user
        const result = await pool.query('SELECT * FROM messages WHERE receiver_id = $1', [userId]);
        result.rows.forEach(row => {
            ws.send(JSON.stringify({sender_id: row.sender_id, content: row.message_text}));
        })
        ws.on('close', () => {
            console.log('Client disconnected', validationResponse.data.user);
        })
        //Send message to client
        SendMessage(ws, connectedUsers);

        ws.send(`Welcome ${validationResponse.user.rows[0].user_id}!`);
    })
}

module.exports = connection


