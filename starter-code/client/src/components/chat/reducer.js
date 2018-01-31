// TODO: Create reducers
let defaultState = [];
export default (state=defaultState, {type, payload}) => {
  switch(type){
    // TODO: add a new message to the state with content and meta
    case 'LOGIN':
    // TODO: return the default state (nothing)
    return [...state,payload];
    case 'LOGOUT':
    // TODO: Add payload
    return defaultState;
    case 'USER_CONNECTED':
    // TODO: Add payload
    return [...state,payload]
    case 'USER_DISCONNECTED':
    // TODO: Add payload
    return [...state,payload];
    case 'MESSAGE':
    return [...state,payload];
    default:
      return state
  }
}
