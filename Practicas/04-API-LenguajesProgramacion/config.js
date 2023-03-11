/**ESTE SI SE SUBE A GITHUB 
 * 
 * ESTO ES PARA QUE NO ENTRE DON ANONIMUS Y ME HACKEE LA DATABASE
*/
const dotenv = require('dotenv').config();

const config = {
    db: {
        host: process.env.HOSTNAME,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    },
    listPerPage: 10
};

module.exports = config;