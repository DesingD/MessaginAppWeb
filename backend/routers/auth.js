const Register = require('../controllers/auth/Register')
const Login = require('../controllers/auth/Login');
const Forgot = require('../controllers/auth/Forgot');

const auth = (app) => {
    app.post('/auth/register', async (req, res) => {
        Register(req, res)
    });
    
    // Autenticación de usuarios
    app.post('/auth/login', async (req, res) => {
        Login(req, res)
    });

    // Recuperación de contraseña
    app.post('/auth/forgot', async (req,res) =>{
        Forgot(req, res)
    })
}

module.exports = auth
