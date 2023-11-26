const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket, to) => {
	socket.to(to);
	//socket bilan emot qilsa qimdan request kelas shunga respoonsa qaytadi, io bilan qilsa 1ta odamdan kelsa ham hammaga response qaytadi
	socket.on('chat message', msg => {
		io.emit('chat message', msg);
	});
});

http.listen(port, () => {
	console.log('listening on *:' + port);
});
