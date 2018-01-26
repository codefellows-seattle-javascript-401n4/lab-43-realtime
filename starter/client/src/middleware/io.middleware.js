import io from 'socket.io-client';

const socket = io(`${__API_URL__}`);

export const ioMiddleware = (store) => (next) => (action) => {
    if( typeof action === "object" && ! action.blocked ) {
        socket.emit(action.type, action.payload);
    }
    next(action)
}