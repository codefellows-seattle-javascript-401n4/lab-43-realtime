const MESSAGE = (socket) => (payload) => {
    socket.broadcast.emit("MESSAGE ", {...payload, username: socket.username})
    // TODO: emit with socket.broadcast a "MESSAGE" action with the username added to the payload object
}

export default {MESSAGE}
