const jwt = require('jsonwebtoken')
const {pool} = require('../../config/connectPostgres')

const GetChats = async (req, res) => {

    try{
        const {token} = req.headers

        // check if token is valid
        const validToken = jwt.decode(token, process.env.SECRET_KEY);        

        console.log(validToken.user)

        // Search chats for user
        pool.query( "SELECT * FROM chats WHERE user_id1 = $1 OR user_id2 = $1", [validToken.user],
          (err, result) => {
            if (err) {
              res.status(500).json({ message: "Error execute query" });
            } else {
              res.status(200).json({ message: "GetChats", data: result.rows });
            }
          }
        );


        

    }catch(error){
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = GetChats