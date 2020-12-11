var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
//const options = {};
var port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Document = require('./model/documents');

connectionString = "mongodb+srv://back:Lumos35@nlpf.t3ynp.mongodb.net/nlpf?retryWrites=true&w=majority"
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
	console.log('connected to db')
}).catch((error) => {
	console.log(error)
})
  

  // Routing
  app.use(express.static(path.join(__dirname, 'public')));
  
  var text = {
    text: ''
  };

  const io = require('socket.io')(server);
  server.listen(port);


  io.on('connection', (socket) => {
    console.log('new connection : ' + socket.id);

    socket.on('SEND_DOCUMENT', (data) => {
      console.log(data);
      console.log('message received');
    });

    socket.on('disconnect', (reason) => {
      console.log(reason);
    });
  });
