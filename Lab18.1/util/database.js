const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'favorites',
    password: ''
});

module.exports = pool.promise();