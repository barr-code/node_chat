var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/public', express.static(__dirname + '/public'));


app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('chatmessage', function(msg){
		console.log('message: ' + msg);
	});
	socket.on('disconnect', function(){
		console.log('The doofus is disconnected now.')
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});