//PRIMERO INSTALO Y CONFIGURO NODEMON Y  EXPRESS

const path = require ('path');
const express = require('express');
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);//cpnfiguro el puerto

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
const server = app.listen (app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

//configuramos el socket
const SocketIO = require('socket.io');
const io = SocketIO(server);

//websockets
io.on('connection', (socket) => {
    console.log('new connection', socket.id);

    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data);
    });

    socket.on('chat:typing', (data) => {
        socket.broadcast.emit('chat:typing' , data);
    })
});
