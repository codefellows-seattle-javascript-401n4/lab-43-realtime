const MESSAGE = (socket) => (payload) => {
    socket.broadcast.emit("MESSAGE", {...payload, username: socker.username});
}

export default {MESSAGE}
