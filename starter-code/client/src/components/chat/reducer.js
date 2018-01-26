// TODO: Create reducers 
let defaultState = [];

export default (state=[], {type, payload}) => {
  switch(type){
    // TODO: add a new message to the state with content and meta
    case 'LOGIN': 
      return [...state, payload];
    // TODO: return the default state (nothing)
    case 'LOGOUT': 
      return defaultState;
    // TODO: Add payload
    case 'USER_CONNECTED':
      return [...state, payload];
    // TODO: Add payload
    case 'USER_DISCONNECTED':
      return [...state, payload];
    // TODO: Add payload
    case 'MESSAGE':
    return [...state, payload];
    
    default:
      return state
  }
}
