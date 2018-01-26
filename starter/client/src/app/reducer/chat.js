export default (state=[], action) => {
    let {type, payload} = action;
    
    switch(type) { 
            case 'LOGIN':
                return[...state, payload];                    

            case 'LOGOUT':
                return [];

            case 'USER_CONNECTED':
                return [...state, payload];

            case 'USER_DISCONNECTED':
                return [...state, payload];

            case 'MESSAGE':
                return [...state, payload];

            default:
                return state;
    }
    
}