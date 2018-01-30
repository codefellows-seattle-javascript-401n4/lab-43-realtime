// all payloads: 
// {username: string, meta: bool, content: string}

// Actions will be dispatched from subscribers that hear messages coming directly to us from the server!

// TODO: Create actions: USER_CONNECTED, USER_DISCONNECTED, MESSAGE

export const connect = (payload) => ({
  type: 'USER_CONNECTED',
  payload: payload
});

export const disconnect = (payload) => ({
  type: 'USER_DISCONNECTED',
  payload: payload
});

export const message = (payload) => ({
  type: 'MESSAGE',
  payload: payload
});
