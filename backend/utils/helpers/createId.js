const { v4: uuidv4 } = require('uuid');

const createId = () => {
    const id = uuidv4();
    return id;
}

module.exports = createId