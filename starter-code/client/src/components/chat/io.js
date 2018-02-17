import io from 'socket.io-client';

// Setup a socket between this client and our backend server
export const socket = io(`${__API_URL__}`);

export const ioMiddleware = (store) => (next) => (action) => {
  if(typeof action === 'object' && !action.blocked){
    socket.emit(action.type, action.payload);
  }
  next(action);
};

export default (store, subscribers) => {

  Object.keys(subscribers)
    .map(type => {
      let handler = subscribers[type];
      return {type, handler};
    })
    .forEach(subscriber => {
      socket.on(subscriber.type, payload => {
        console.log('_SUBSCRIBE_EVENT_', subscriber.type, payload);
        try {
          let fakeStore = {
            dispatch: action => {
              action.blocked = true;
              return store.dispatch(action);
            },
            getState: () => store.getState(),
          };
          subscriber.handler(fakeStore)(socket)(payload);
        }

        catch(err) {
          console.error('_SUBSCRIBE_ERROR_', err.message);
        }
      });

    });
};
