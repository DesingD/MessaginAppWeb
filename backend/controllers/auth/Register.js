const {pool} = require('../../config/connectPostgres')
const bcrypt = require('bcrypt')
const createId = require('../../utils/helpers/createId')
const sendMail = require("../../utils/helpers/sendMail")
const jwt = require('jsonwebtoken');

const Register = async(req, res) => {
    const {username, password, email, profile_image} = req.body;

    try{
        //verificar si el usuario ya existe
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        if(user.rows.length > 0){
            return res.status(400).json({ message: 'User already exists'})
        }

        //create id
        const id = createId();
        
        const hashedPassword = await bcrypt.hash(password, 10);

        try{
            const result = await pool.query('INSERT INTO users (id, username, password, email, profile_image) VALUES ($1, $2, $3, $4, $5) RETURNING *' ,
                [id,username, hashedPassword, email, profile_image]
            );

            const subject = 'Welcome to the app'
            const code = Math.floor(100000 + Math.random() * 900000);

            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 2);

            //create id token
            const idToken = createId();
            //poner el token en la base de datos
            await pool.query('INSERT INTO tokens (id, token_type, user_id, code, expiration_date) VALUES ($1, $2, $3, $4, $5)', [idToken,'1', id, code, expirationDate])

            //token de confirmacion
            const tokenConfirmation = jwt.sign({user: id, code}, process.env.SECRET_KEY, {expiresIn: '2d'})
            const linkConfirmation = `http://localhost:3000/confirm/${tokenConfirmation}`

            const text = `Este es el link para confirmar tu cuenta: ${linkConfirmation}`

            const html = `
                <h1>Link para confirmar tu cuenta</h1>
                <p>Este es el link para confirmar tu cuenta:</p>
                <a href="${linkConfirmation}">Link Confirm account</a>
                <p>Si no solicitaste la confirmacion de cuenta, ignora este mensaje</p>
                <p>El link expira en 2 días</p>
            `

            //enviando el correo
            try{
                const response = await sendMail(email, subject, text, html);
                console.log('Email sent: ', response);
                res.status(201).json({ message: 'User registered' , email: 'Email sent' });
            }catch(error){
                console.error('Error sending email: ', error)
                return res.status(500).json({ message: 'Error sending email' });
            }



        }catch(error){
            console.error(error)
            return res.status(500).json({ message: 'Error registering user' });
        }
        
        
    }catch ( error ){
        console.error(error)
        res.status(500).json({ message: 'Error registering user' });
    }
}

module.exports = Register