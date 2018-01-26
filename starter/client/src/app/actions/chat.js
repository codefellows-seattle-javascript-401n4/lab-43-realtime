export const connect = (payload) =>  ({
    type: 'USER_CONNECTED',
    payload
});

export const disconnect = (payload) =>  ({
    type: 'USER_DISCONNECTED',
    payload
});

export const message = (payload) =>  ({
    type: 'MESSAGE',
    payload
});

