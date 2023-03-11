/* EN MYSQL

IMPORTANTE!!!
DELETE FROM +ELNOMBRE DEL RECURSO...LO ELIMINA COMPLETO!
PARA ELIMINAR LA BASE COMPLETA ES DROP DATABASE y el nombre
Crate -->   Insert  --> Post
Read -->   Select  --> GET
Update -->   Update  --> Update
Delete -->   Delete  --> Delete

*/

const express = require ('express');
const app = express();
const port = 3000;
const programmingLenguajesRouter = require('./routes/programmingLenguajes')


app.use(express.json()) //para poder agarrar las peticiones

app.use(
    express.urlencoded({
        extended: true
    })
)

app.get("/", (req, res) => {
    res.json({message: "OK"});
});

app.use('/lenguajes', programmingLenguajesRouter);

app.use((err, req , res, next) => {
    const statusCode = err.statusCode || 500;
});

app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`)
})
