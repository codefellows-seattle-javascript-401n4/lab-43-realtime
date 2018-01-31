import User from '../../../model/user.js'

const LOGIN = (socket) => (payload) => {
  let tokenSeed = payload.tokenSeed;
  User.findOne({tokenseed:tokenSeed})
    .then(user => {
      socket.username = user.username;
      let packet = {
        username: user.username,
        content: 'entered the chatroom',
        meta: true,
      }

      socket.broadcast.emit('LOGIN', packet);
    })
}

const LOGOUT = (socket) => (payload) => {
  let packet = {
    username: socket.username,
    content: 'left the chatroom',
    meta: true,
  }

  socket.broadcast.emit('USER_DISCONNECTED', packet);
  
  delete socket.username;
}

export default {LOGIN, LOGOUT}
