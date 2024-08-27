const jwt = require('jsonwebtoken')
const { pool } = require('../config/connectPostgres')
const createId = require('../utils/helpers/createId')
const GetAll = require('../controllers/user/GetAll')
const GetOne = require('../controllers/user/GetOne')

const user = (app) => {
    app.post('/new/friend', async(req,res) => {
        const { friendId } = req.body
        const {token} = req.headers

        //validar que el token sea valido
        const data = jwt.decode(token)

        const id = createId()
        const IdUserSend = data.user
        const IdUserReceive = friendId
        const code = Math.floor(Math.random() * 1000000)
        const type = '3'

        //crear la solicitud de amistad
        const tokenSolicitud = jwt.sign({IdUserSend, IdUserReceive, code, type}, process.env.SECRET)
        await pool.query('INSERT INTO tokens (id ,token_type, user_id, code, expiration_date) VALUES ($1, $2, $3, $4, $5)', [id,type, user.rows[0].id, code, expirationDate])

        res.status(200).json({message: 'Friend added', data: {friendId, data}})
    })
    app.get('/all/users', (req,res) => {
        GetAll(req,res)
    })
    app.get('/one/user', async(req,res) => {
        GetOne(req,res)
    })
}
module.exports = user