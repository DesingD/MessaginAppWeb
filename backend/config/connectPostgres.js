const { Pool } = require('pg');

const pool = new Pool({
    user: "admin",
    host: "postgres", //si esta en un contenedor de docker va el nombre del contenedor
    database: "messaging",
    password: "admin",
    port: 5432,
});

const connectPostgres = async () => {
    try{
        

        // Probar la conexión
        const res = await pool.query('SELECT NOW()');
        console.log('Connected to Postgres', res.rows[0].now);        

        return pool;

    }catch(error){
        console.error('Failed to connect to Postgres', error);
        process.exit(1);
    }
}

module.exports = {connectPostgres, pool};
