// const app = require('express')();
// const http = require('http');

// const { Server } = require('socket.io');
// const server = http.createServer(app);
// const io = new Server(server, {
// 	cors: {
// 		origin: '*',
// 	},
// });
// //nechta user online ekanligini tekshirish
// //let count = 0;
// let users = [];

// io.on('connection', socket => {
// 	//count++;
// 	//count.push({ id: socket.id, name: `user ${count.length}` });
// 	users.push({ id: socket.id, name: 'user' + users.length });
// 	//console.log(count);
// 	//console.log(socket.id);
// 	const currentUser = users.find(user => user.id === socket.id);

// 	socket.on('submit', ({ message }) => {
// 		//console.log(data);

// 		//yozgan odamnni oziga javob qaytaradi
// 		//socket.emit('response', { message: 'hi' });

// 		//hammaga javob qaytaradi
// 		//io.emit('response', { message: 'hi' });

// 		//yozgan odamdan boshqa hammaga javob qaytaradi
// 		socket.broadcast.emit('response', { message, user: currentUser.name });

// 		//io.emit('chat message', msg);
// 	});

// 	//

// 	socket.emit('name', { name: currentUser.name });

// 	//

// 	socket.on('disconnect', data => {
// 		//count--;
// 		const name = users.filter(user => user.id !== socket.id);
// 		count = name;
// 		// const name = count.filter(user => user.id !== socket.id);
// 		// count = name;
// 		//console.log(count);
// 	});
// });

// server.listen(3000, () => {
// 	console.log(3000);
// });


const WebSocket = require("ws");
let ws = new WebSocket.Server({ port: 5500 });
ws.on("connection", (w,req) => { 
	console.log("new client connected");

	w.on("close", (w) => { 
		console.log("new client connected");
		
	})
	w.onmessage = (e) => {
		ws.clients.forEach(client => { 
			console.log(client);
			console.log(e.data);
			
		})
	 }




})