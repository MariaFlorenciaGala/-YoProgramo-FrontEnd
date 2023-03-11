function getOffSet(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}

/**ESTO NOS DEVUELVE SI ESTÁ VACIA LA BASE DE DATOS  */

function emptyRows(rows) {
    if(!rows) {
        return [];
    }
    return rows
}

module.exports = {
    getOffSet,
    emptyRows
}