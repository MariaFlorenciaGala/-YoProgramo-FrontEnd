//este es nuestro modelo

const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function create(programmingLenguajes) {
    const resultado = await db.query(`
    INSERT INTO lenguajes_programacion
    (nombre, anio_salida, github_rank)
    VALUES(
        "${programmingLenguajes.nombre}",
        "${programmingLenguajes.anio_salida}",
        "${programmingLenguajes.github_rank}"
        )
    `);
    let message = "Error al crear el lenguaje de programacion";
    if(resultado.affectedRows) {
        message ="El lenguaje se ha creado con éxito";
    }
    return {message}
} 


async function  read(page = 1) {//si no la acemos asincrona, va a tronar....por que no tiene los datos
    const offSet = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(`SELECT * FROM lenguajes_programacion LIMIT ${offSet}, ${config.listPerPage}`);

    console.log(process.env.HOSTNAME)
    const data = helper.emptyRows(rows);
    const metadata = {page};

    return {
        data,
        metadata
    }
}

async function update(id, programmingLenguajes) {
    const resultado = await db.query(`
    UPDATE lenguajes_programacion
    SET nombre="${programmingLenguajes.nombre}",
        anio_salida="${programmingLenguajes.anio_salida}",
        github_rank="${programmingLenguajes.github_rank}"
        WHERE id="${id}"
    `);
    let message = "Error al actualizar el lenguaje de programacion";
    if(resultado.affectedRows) {
        message ="El lenguaje se ha actualizado con éxito";
    }
    return {message}
}

async function delete1 (id) {
    const resultado = db.query(`
    DELETE FROM lenguajes_programacion WHERE id="${id}";
    `)
    let message = "Error al eliminar el lenguaje de programacion";
    if(resultado.affectedRows) {
        message = "El lenguaje se ha eliminado con éxito";
    }
    return {message}
}




//SE EXPORTA PARA QUE OTROS ARCHIVOS PUEDAN USARLO 
// Y FORMA CRUD CREATE READ UPDATE DELETE
module.exports = {
    create,
    read,
    update,
    delete1
}