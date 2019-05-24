// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const 	message = document.getElementById('message');
		handle = document.getElementById('handle'),
		btn = document.getElementById('send'),
		output = document.getElementById('output');

// Emit event
btn.addEventListener('click', () => {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	})
});

// listen for event
socket.on('chat', (data) => {
	output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
});