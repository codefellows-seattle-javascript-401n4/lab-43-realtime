const MESSAGE = (socket) => (payload) => {
    // TODO: emit with socket.broadcast a "MESSAGE" action with the username added to the payload object
    socket.broadcast.emit('MESSAGE', {...payload, username: socket.username});
}

export default {MESSAGE}
