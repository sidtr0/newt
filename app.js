const WebSocket = require('ws');

let socket = new WebSocket("wss://localhost:3000");

socket.onopen = function (e) {
    console.log("[open] connection established!");
    console.log("Sending to server");
    socket.send("My name is Drac");
};

socket.onmessage = function(event) {
    console.log(`[message] data recieved from server: &{event.data}`);
}

socket.onclose = function(event) {
    if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code = ${event.code} reason = ${event.reason}`)
    } else {
        console.log("[close] Connection died.");
    }
};

socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
};
