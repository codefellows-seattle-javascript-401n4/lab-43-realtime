// TODO: Handle: LOGIN, UPDATE_PROFILE
// TODO: On login, we'll want to set the user that is logged in as our state


let defaultState = {};

export default (state=defaultState, action) => {
    
    let {type, payload} = action;
    
    switch(type) { 
        
        case "LOGIN":
            return payload || {};
            
        case "LOGOUT":
            return defaultState;
            
        case "UPDATE_PROFILE":
            return Object.assign({}, state, payload);
            
        default:
            return state;
        
    }
    
}