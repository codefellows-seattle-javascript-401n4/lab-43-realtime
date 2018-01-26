export default (state=[], {type, payload}) => {
        
    switch(type) {
        case "LOGIN":
            return true;
            
        case "LOGOUT":
            return false;
            
        default:
            return state;
    }
}