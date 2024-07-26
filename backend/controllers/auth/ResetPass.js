const {pool} = require('../../config/connectPostgres')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const resetPassword = async (req, res) => {
        const {token, password} = req.body
        let tokenVerify;

        try{
            //verificar si el token es valido
            try{
                tokenVerify = jwt.verify(token, process.env.SECRET_KEY)    
            }catch(error){
                return res.status(400).json({message: 'Invalid token'})
            }

            //verificar si el token esta en la base de datos
            const tokenDB = await pool.query('SELECT * FROM tokens WHERE code = $1 AND user_id = $2', [tokenVerify.code, tokenVerify.user]);
            if(tokenDB.rows.length === 0){
                return res.status(400).json({message: 'Invalid token'})
            }
            
            //verificar si el token esta expirado
            const date = new Date();
            if(date > tokenVerify.expirationDate){
                return res.status(400).json({message: 'Token expired'})
            }

            //actualizar la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);
            await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, tokenDB.rows[0].user_id])

            console.log(tokenVerify)
           

            res.status(200).json({message: 'Password updated'})

        }catch(error){
            console.error(error)
            res.status(500).json({message: 'Error reset password'})
        }

        
    }

module.exports = resetPassword;