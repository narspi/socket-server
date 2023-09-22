const express = require('express');
const app = express();
const cors = require('cors');

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors: {
    origin: '*'
  }
});

const clients = {};
const messages = [];

io.on('connection', (socket) => {
  console.log('Новое подключение Socket.io');

  // Отправляем текущие сообщения клиенту при подключении
  socket.emit('initialMessages', messages);

  socket.on('sendMessage', (message) => {
    messages.push(message);
    io.emit('newMessage', message); // Рассылка нового сообщения всем клиентам
  });

  socket.on('disconnect', () => {
    console.log('Socket.io соединение закрыто');
  });
});

server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
