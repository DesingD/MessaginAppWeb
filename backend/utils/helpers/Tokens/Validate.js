const {pool} = require('../../../config/connectPostgres')
const jwt = require('jsonwebtoken')

const Validate = async(token) => {
    let tokenVerify;
    try{
        //Verify if the token is valid
        try{
            tokenVerify = jwt.verify(token, process.env.SECRET_KEY)
        }catch(error){
            return {data: null, user: null, validate: false, message: 'Invalid token'}
        }

        //Verify if token is in the database
        const tokenDB = await pool.query('SELECT * FROM tokens WHERE code = $1 AND user_id = $2', [tokenVerify.code, tokenVerify.user]);
        if(tokenDB.rows.length === 0){
            return {data: null, user: null,validate: false, message: 'Invalid token'}
        }

        //Verify if the token is expired
        const date = new Date();
        if(date > tokenVerify.expirationDate){
            return {data: null, validate: false, message: 'Token expired'}
        }

        return {data: tokenVerify, user: tokenDB, validate: true, message: 'Token is valid'}

    }catch(error){
        console.error(error)
        res.status(500).json({message: 'Error validation token'})
    }

}

module.exports = Validate;