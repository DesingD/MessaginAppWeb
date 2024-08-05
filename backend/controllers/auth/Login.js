const {pool} = require('../../config/connectPostgres')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createId = require('../../utils/helpers/createId')

const Login = async (req, res) => {
    const { email, password } = req.body;

    try{
        // Buscando el usaurio en la base de datos
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if(user.rows.length === 0){
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Comparando la contraseña
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if(!validPassword){
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Creando el token
        const code = Math.floor(100000 + Math.random() * 900000);
        const tokenLogin = jwt.sign({user: user.rows[0].id, code: code}, process.env.SECRET_KEY)

        
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getUTCDay() + 2);

        // Creando el id para el token
        const id = createId();
        //Poner el token en la base de datos
        await pool.query('INSERT INTO tokens (id, token_type, user_id, code, expiration_date) VALUES ($1, $2, $3, $4, $5)', [id, '2', user.rows[0].id, code, expirationDate])

        res.status(200).json({ message: 'User logged in', token: tokenLogin});
    }catch(error){
        console.error(error)
        res.status(500).json({ message: 'Error logging in user' });
    }
}

module.exports = Login;