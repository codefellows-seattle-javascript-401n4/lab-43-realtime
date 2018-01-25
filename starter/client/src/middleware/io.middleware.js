import io from 'socket.io-client';

const socket = io(`${__API_URL__}`);

export default store => next => action => {
    if (typeof action === 'object') {
        socket.emit(action.type, action.payload);
    }
    next(action);
}