const {Server} = require('socket.io')

const ioServer = (server) => {

    const io = new Server (server,{
        connectionStateRecovery: {}
    })
    return io
}

module.exports = ioServer