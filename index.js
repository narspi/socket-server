const express = require('express');
const WebSocket = require('ws');
const cors = require('cors'); 


const app = express();
app.use(cors());


// Создаем веб-сервер с помощью Express
const server = app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
  });
  
  // Создаем WebSocket-сервер, привязанный к веб-серверу
  const wss = new WebSocket.Server({ server });
  
  // Обработчик для новых подключений WebSocket
  wss.on('connection', (ws) => {
    console.log('Новое подключение WebSocket');
  
    // Обработчик для получения сообщений от клиента
    ws.on('message', (message) => {
      console.log(`Получено сообщение: ${message}`);
  
      // Отправляем обратно клиенту тоже самое сообщение
      ws.send(`Yjd: ${message}`);
    });
  
    // Обработчик закрытия соединения клиентом
    ws.on('close', () => {
      console.log('WebSocket соединение закрыто');
    });
  });
  

