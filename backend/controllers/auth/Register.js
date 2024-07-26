const {pool} = require('../../config/connectPostgres')
const bcrypt = require('bcrypt')

const Register = async(req, res) => {
    const {username, password, email, profile_image} = req.body;

    try{
        //verificar si el usuario ya existe
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        if(user.rows.length > 0){
            return res.status(400).json({ message: 'User already exists'})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO users (username, password, email, profile_image) VALUES ($1, $2, $3, $4) RETURNING *' ,
            [username, hashedPassword, email, profile_image]
        );
        res.status(201).json(result.rows[0]);
    }catch ( error ){
        console.error(error)
        res.status(500).json({ message: 'Error registering user' });
    }
}

module.exports = Register