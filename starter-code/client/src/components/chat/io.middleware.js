/* global __API_URL__ */
import io from 'socket.io-client';

// Setup a socket between this client and our backend server
const socket = io(`${__API_URL__}`);

export default (store) => (next) => (action) => {
  if(typeof action === 'object'){
    socket.emit(action.type, action.payload);
  }
  next(action);
};
