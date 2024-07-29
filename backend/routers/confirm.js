const confirmEmail = require('../controllers/confirm/confirmEmail');

const confirm = (app) => {

    app.post('/confirm/email', async (req, res) => {
        confirmEmail(req, res)
    });

}

module.exports = confirm