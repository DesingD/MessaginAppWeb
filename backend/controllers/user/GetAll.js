const { pool } = require('../../config/connectPostgres')
const jwt = require('jsonwebtoken')
const GetAll = async (req, res) => {
    try{
        const {token} = req.headers

        //validar que el token sea valido
        const data = jwt.verify(token, process.env.SECRET_KEY)
    
        const users = await pool.query(
          "SELECT id, username, profile_image, is_email_confirmed FROM users"
        );
        res.status(200).json(users.rows)
    }catch(error){
        res.status(500).json({ message: 'User unauthorized' })
    }   
}

module.exports = GetAll;