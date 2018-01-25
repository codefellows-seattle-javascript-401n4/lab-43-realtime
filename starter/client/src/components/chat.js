import React from 'react';
import {connect} from 'react-redux';

import * as chatActions from '../app/actions/chat.js';
import io from './chat/io.js';
import {store} from '../app/store.js';

import * as subscribers from './chat/subscribers.js';

io(store, subscribers);

class Chat extends React.Component {
    
    render() {
        
        return (
            <React.Fragment>
                Chat Page
            </React.Fragment>
        )
    }
}

export const mapStateToProps = state => ({
    chat: state.chat
});

export const mapDispatchToProps = dispatch => ({
    message: (data) => dispatch(chatActions.message(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);