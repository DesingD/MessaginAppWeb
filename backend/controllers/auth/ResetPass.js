const {pool} = require('../../config/connectPostgres')
const bcrypt = require('bcrypt')
const Validate = require('../../utils/helpers/Tokens/Validate')

const resetPassword = async (req, res) => {
        const {token, password} = req.body
        let tokenVerify;

        try{
            
            //verificar si el token es valido
            tokenVerify = await Validate(token);
            if (!tokenVerify.validate){
                return res.status(400).json({message: tokenVerify.message})
            }


            //actualizar la contraseña
            try {
             
                const hashedPassword = await bcrypt.hash(password, 10);
                await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, tokenVerify.user.rows[0].user_id])

                //Delete token from database
                await pool.query('DELETE FROM tokens WHERE code = $1 AND user_id = $2', [tokenVerify.data.code, tokenVerify.data.user])
           

                res.status(200).json({message: 'Password updated'})   
            } catch (error) {
                console.error(error)
                return res.status(500).json({message: 'Error reset password'})
            }


        }catch(error){
            console.error(error)
            res.status(500).json({message: 'Error reset password'})
        }

        
    }

module.exports = resetPassword;