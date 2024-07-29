const jwt = require('jsonwebtoken')
const {pool} = require('../../config/connectPostgres');

const confirmEmail = async (req, res) => {
    try {
        
        const {token} = req.body;

        //verificar si el token es valido
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const {user, code} = decoded;

        //verificar si el token esta en la base de datos
        const tokenDB = await pool.query('SELECT * FROM tokens WHERE user_id = $1 AND code = $2', [user, code]);
        if(tokenDB.rows.length === 0){
            return res.status(400).json({ message: 'Invalid token'})
        }

        //verificar si el token no ha expirado
        const currentDate = new Date();
        const expirationDate = new Date(tokenDB.rows[0].expiration_date);
        if(currentDate > expirationDate){
            return res.status(400).json({ message: 'Token expired'})
        }

        //actualizar el usuario
        await pool.query('UPDATE users SET is_email_confirmed = $1 WHERE id = $2', [true, user]);

        //borrar el token
        await pool.query('DELETE FROM tokens WHERE user_id = $1 AND code = $2', [user, code]);
        
        res.status(200).json({ message: 'Email confirmed' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Exportar el controlador
module.exports = confirmEmail;