const { pool } = require("../../config/connectPostgres");
const sendMail = require("../../utils/helpers/sendMail")
const jwt = require('jsonwebtoken')

const forgotPassword = async (req, res) => {
    //verificar si existe el correo en la base de datos
    const {email} = req.body;
    try{
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if(user.rows.length === 0){
            return res.status(400).json({ message: 'User not found'})
        }
        const subject = 'Link Reset Password'

        const code = Math.floor(100000 + Math.random() * 900000);
        

        //Token de reseteo
        const tokenReset = jwt.sign({email, code}, 'secret', {expiresIn: '5m'})
        const linkReset = `http://localhost:3000/reset/${tokenReset}`

        const text = `Este es el link para resetear tu contraseña: ${linkReset}`

        const html = `
            <h1>Link para resetear tu contraseña</h1>
            <p>Este es el link para resetear tu contraseña:</p>
            <a href="${linkReset}">Link Reset password</a>
            <p>Si no solicitaste el cambio de contraseña, ignora este mensaje</p>
            <p>El link expira en 5 minutos</p>
        `

        //enviando el correo
        try {
            const response = await sendMail(email, subject, text, html);
            console.log('Email sent: ', response);
            return res.status(200).json({ message: 'Email sent' });
        } catch (error) {
            console.error('Error sending email: ', error);
            return res.status(500).json({ message: 'Error sending email' });
        }
        
    }catch(error){
        res.status(500).json({ message: 'Error sending email'})
    }
}

module.exports = forgotPassword;