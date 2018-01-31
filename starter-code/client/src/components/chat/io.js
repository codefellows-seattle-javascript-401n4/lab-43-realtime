import io from 'socket.io-client'

// Setup a socket between this client and our backend server
export const socket = io(`${__API_URL__}`)

// TODO: Map each of the subscribers to create an array of actions/functions
export default (store, subscribers) => {

    Object.keys(subscribers)
        .map(type => {
          let handler = subscribers.type;
          return {type,handler};
        }) // returns an array of subscribers
        .forEach(subscriber => {
          socket.on(subscriber.type, (payload) => {
            try {
              subscriber.handler(store)(socket)(payload);
            }
            catch(e){
              console.log(e.message);
            }
          })


            // TODO: Create a fakeStore (with dispatch, getState) where the dispatch blocks the action via property
                   // The fake store just calls real store.dispatch and store.getState
                   // This prevents actions being run until they are complete

    })
}
