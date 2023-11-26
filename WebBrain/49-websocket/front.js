let socket = new WebSocket("ws://127.0.0.1:5500/49-websocket/index.html");
socket.onopen = () => {
	console.log("socket connected");
	
 }

