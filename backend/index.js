const express = require('./config/server')
const cors = require('./config/cors')
const connectDB = require('./config/connectDB')
const {connectPostgres} = require('./config/connectPostgres')
const routes = require('./routers/index')
const http = require('http')
const bodyparser = require('body-parser')
const {WsServer} = require('./socket/ioServer')

const app = express()

// Config environment variables
require('dotenv').config()


// Config cors
cors(app)

//body configuration
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


// Create server
const server = http.createServer(app)

// Connect to database
//connectDB();
connectPostgres();

// Rutas de la api
routes(app)


//Manejar las conexiones WebSocket
WsServer(server)

// Start the server
const port = process.env.PORT ||3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
