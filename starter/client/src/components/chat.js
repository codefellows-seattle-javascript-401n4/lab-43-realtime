import React from 'react';
import {connect} from 'react-redux';

import * as chatActions from '../app/actions/chat.js';
import io from './chat/io.js';
import {store} from '../app/store.js';

import * as subscribers from './chat/subscribers.js';

io(store, subscribers);

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state ={content: ''};
    }

    handleChange = (e) => {
        this.setState({content: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        let packet = {
            content: this.state.content,
            meta: true
        };
        this.props.message(packet);
    }
    
    render() {
        
        return (
            <div className="chat-container">
                <ul>
                    {
                        this.props.chat.map((message,i) => <li key={i}>{message.content}</li>)
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }s
}

export const mapStateToProps = state => ({
    chat: state.chat
});

export const mapDispatchToProps = dispatch => ({
    message: (data) => dispatch(chatActions.message(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);