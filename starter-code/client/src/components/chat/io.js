import io from 'socket.io-client';

// Setup a socket between this client and our backend server
export const socket = io(`${__API_URL__}`);

// TODO: Map each of the subscribers to create an array of actions/functions
export default (store, subscribers) => {

  Object.keys(subscribers)
    .map(type => {
      let handler = subscribers.type;
      return {type, handler};
    })
    .forEach(subscriber => {
      socket.on(subscriber.type, payload => {
        console.log('_SUBSCRIBE_EVENT_', subscriber.type, payload);
        try {
          subscriber.handler(store)(socket)(payload);
        }

        catch(err) {
          console.error('_SUBSCRIBE_ERROR_', err.message);
        }
      });

      // TODO: do a socket.on for each type, with a function that takes payload

      // TODO: call the handler with (store or fakeStore)(socket)(payload)

      // TODO: Create a fakeStore (with dispatch, getState) where the dispatch blocks the action via property
      // The fake store just calls real store.dispatch and store.getState
      // This prevents actions being run until they are complete

    });
};
