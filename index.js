var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;
connectionString = "mongodb+srv://back:Lumos35@nlpf.t3ynp.mongodb.net/nlpf?retryWrites=true&w=majority"
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

server.listen(port, () => {
    console.log('Server listening at port %d', port);
  });
  
  // Routing
  app.use(express.static(path.join(__dirname, 'public')));

  io.on('connection', (socket) => {
    socket.on('join', function(document) {
      socket.join(document);
    });
  });
