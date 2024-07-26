const cors = require('cors');
const logger = require('morgan')

module.exports = function(app) {
    app.use(cors());

    app.use(logger('dev'))
};
