const WebSocket = require('ws');
const connection = require('./connection')

const WsServer = (server) => {
    const wss = new WebSocket.Server({server})

    connection(wss)
}

module.exports = {WsServer}