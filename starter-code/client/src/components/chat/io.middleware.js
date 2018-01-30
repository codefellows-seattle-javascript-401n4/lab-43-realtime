/* global __API_URL__ */
import io from 'socket.io-client'

// Setup a socket between this client and our backend server
const socket = io(`${__API_URL__}`)

// TODO: Create middleware
//       Ensure that the action is an object, isn't blocked
//       Emit it (type,payload)to the socket.

export default (store) => (next) => (action) => {

  if(typeof action === 'object'){
    socket.emit(action.type, action.payload)
  }
  next(action)
}