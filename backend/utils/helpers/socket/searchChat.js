const {pool} = require('../../../config/connectPostgres')
const createID = require('../createId')
const searchChat = async (sender_id, receiver_id) => {
    const chat = await pool.query(
      "SELECT * FROM chats WHERE (user_id1 = $1 AND user_id2 = $2) OR (user_id1 = $2 AND user_id2 = $1)",
      [sender_id, receiver_id]
    );
    if (chat.rows.length === 0) {
      const chat_id = createID();
      const chat_name = `${sender_id}-${receiver_id}`;
      await pool.query(
        "INSERT INTO chats(id, user_id1, user_id2, chat_name) VALUES($1, $2, $3, $4)",
        [chat_id, sender_id, receiver_id, chat_name]
      );
      return chat_id
    }else{
        return chat.rows[0].id
    }

}

module.exports = searchChat;