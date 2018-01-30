import User from '../../../model/user.js'

const LOGIN = (socket) => (payload) => {

  let tokenSeed = payload.tokenSeed;
  User.findOne({tokenSeed})
    then(user => {
      socket.username = user.username;

      let packet = {
        username: user.username,
        content: 'entered the chat',
        meta: true
      }

      socket.broadcast.emit('USER_CONNECTED', packet);
    })
  // TODO: lookup the user
  // TODO: namem this socket with their username.
  // TODO: with the user, create an object with their username, some welcome content and a meta property
  // TODO: emit a "USER_CONNECTED" action for that with socket.broadcast
  // ... this ends up being "heard" by the IO listeners on the client (whoohoo!)
}

const LOGOUT = (socket) => (payload) => {

  let packet = {
    username: socket.username,
    content: 'left the chat',
    meta: true
  }

  socket.broadcast.emit('USER_DISCONNECTED', packet);
  delete socket.username;

  // TODO: create a "USER_DISCONNECTED" action with a payload of the user, some message and a true meta flag
  // TODO: emit that with socket.broadcast
  // TODO: delete socket.username
}

export default {LOGIN, LOGOUT}
