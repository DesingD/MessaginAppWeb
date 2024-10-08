const { pool } = require("../../config/connectPostgres");
const sendMail = require("../../utils/helpers/sendMail")
const jwt = require('jsonwebtoken')
const createId = require('../../utils/helpers/createId')

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

        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 5);
        

        //create id for token
        const id = createId();

        //Poner el token en la base de datos
    
        await pool.query('INSERT INTO tokens (id ,token_type, user_id, code, expiration_date) VALUES ($1, $2, $3, $4, $5)', [id,'1', user.rows[0].id, code, expirationDate])
        

        

        //Token de reseteo
        const tokenReset = jwt.sign({user: user.rows[0].id, code}, process.env.SECRET_KEY, {expiresIn: '15m'})
        const linkReset = `http://localhost:3000/reset/${tokenReset}`

        const text = `Este es el link para resetear tu contraseña: ${linkReset}`

        const html = `
            <h1>Link para resetear tu contraseña</h1>
            <p>Este es el link para resetear tu contraseña:</p>
            <a href="${linkReset}">Link Reset password</a>
            <p>Si no solicitaste el cambio de contraseña, ignora este mensaje</p>
            <p>El link expira en 5 minutos</p>
        `

        const dinamicData = {
          subject: `${subject}`,
          Nombre: `${user.rows[0].username}`,
          Link_reset: `${linkReset}`,
        };

        //enviando el correo
        try {
            const response = await sendMail(
              email,
              dinamicData,
              process.env.SENDGRID_TEMPLATE_ID_RESET_PASS
            );
            console.log('Email sent: ', response);
            return res.status(200).json({ message: 'Email sent' });
        } catch (error) {
            console.error('Error sending email: ', error);
            return res.status(500).json({ message: 'Error sending email1'});
        }
        
    }catch(error){
        res.status(500).json({ message: 'Error sending email2'})
    }
}

module.exports = forgotPassword;
