const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results,  ] = await connection.execute(sql, params);// se pone asi por que no se sabe la cantidad de datos que recibirá

    return results;

}
/**ESTO ES UN TIPO DE PATRON MVC
 * MODEL  --> establece una estructura de datos y es el responsable dell consumo de datos
 * VIEW --> afectar o cambiar el UI 
 * CONTROLER --> Es la lógica
 * 
 */
module.exports = {
    query
}