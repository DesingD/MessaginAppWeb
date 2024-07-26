const {ioServer} = require('./ioServer')

ioServer.on('connection', (socket) => {
    console.log('New connection', socket.id)
})


