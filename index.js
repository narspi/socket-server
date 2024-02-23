require('./src/env.js');
// require('./src/db/create.js');
// require('./src/db/insert.js');
const express = require('express');
const app = express();
const axios = require('axios'); 

async function bla() {
    await require('./src/db/create.js');
    // await require('./src/db/insert.js');
}

bla();

// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server,{
//   cors: {
//     origin: '*'
//   }
// });

// const clients = {};
// const messages = [];

// io.on('connection', (socket) => {
//   console.log('Новое подключение Socket.io');

//   socket.emit('initialMessages', messages);

//   socket.on('sendMessage', (message) => {
//     console.log(message)
//     messages.push(message);
//     io.emit('newMessage', message);
//   });

//   socket.on('disconnect', () => {
//     console.log('Socket.io соединение закрыто');
//   });
// });

// server.listen(3000, () => {
//   console.log('Сервер запущен на порту 3000');
// });
