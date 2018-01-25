import io from 'socket.io'

import authSubscriber from "./subscribers/auth";
import messageSubscriber from "./subscribers/message";

const subscribers = Object.assign({}, authSubscriber, messageSubscriber)

export default (http) => {
    
    return io(http)

        .on('connection', (socket) => {
            
            Object.keys(subscribers)
                .map( type => {
                    let handler = subscribers[type];
                    return {type,handler};
                })
                .forEach(subscriber => {
                    socket.on(subscriber.type, (payload) => {
                        console.log("_SUBSCRIBE_EVENT_", subscriber.type, payload);
                        try {
                            subscriber.handler(socket)(payload);
                        }
                        catch(e) {
                            console.error("_SUBSCRIBER_ERROR_", e.message);
                        }
                    })
                })
        })
        .on('error', (error) => {
            console.error('__SOCKET_IO_ERROR__', error)
        })
}