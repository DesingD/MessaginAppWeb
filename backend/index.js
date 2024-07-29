const server = require('./config/server')
const cors = require('./config/cors')
const connectDB = require('./config/connectDB')
const {connectPostgres} = require('./config/connectPostgres')
const routes = require('./routers/index')
const {createServer} = require('node:http')
const ioServer = require('./socket/ioServer')
const bodyparser = require('body-parser')

const app = server()
const serverio = createServer(app)

// Config environment variables
require('dotenv').config()

// io servidor
ioServer(serverio)

// Config cors
cors(app)

//body configuration
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

// Connect to database
//connectDB();
connectPostgres();

// Rutas de la api
routes(app)


// Start the server
const port = 3000;
serverio.listen(port, "0.0.0.0",() => {
    console.log(`Server is running on port ${port}`);
});