const { pool } = require("../../config/connectPostgres")
const jwt = require('jsonwebtoken')

const GetOne = async(req, res) => {
    try{
        const { token } = req.headers;
        const { id } = req.query;
        //verify token
        jwt.verify(token, process.env.SECRET_KEY) 

        //get user
        const user = await pool.query('SELECT id, username, profile_image, is_email_confirmed FROM users WHERE id = $1', [id])
        if(user.rows.length === 0){
            res.status(404).json({message: 'User not found'})
        }

        res.status(200).json({data: user.rows[0]})
    }catch(error){
        res.status(500).json({message: 'Error'})
    }
}

module.exports = GetOne