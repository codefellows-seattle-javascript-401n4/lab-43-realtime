import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/__';

// Our Redux Actions
import * as chatActions from './actions';
import io from './io';
import {store} from '../../app/store';

import subscribers from './subscribers';

io(store, subscribers);

// TODO: Import io ibrary that connects to the server and dispatches messages to our actions via subscribers

// TODO: Import the redux store that was created in main.js (need to pass this to the io library)

// TODO: import server message subscribers

// TODO: call io() with the store and our subscribers

class Chat extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { content:'' };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        this.setState({content: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        e.target.reset();
        let packet = {
            content: this.state.content,
            meta: true
        }
        this.props.message(packet);
        // Call the messageCreate action with a packet for the server (meta and content)
    }
    
    render() {
        
        // TODO: Iterate the messages in state and display them nicely ...
        return (
            <div className='chat-container'>
                
                <ul>
                    {
                        this.props.chat.map((message, i) => 
                            <li key={i}>{message.content}</li>
                        )
                    }
                </ul>
                
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        onChange={this.handleChange} 
                    />
                </form>
            </div>
        )
    }
}



export const mapStateToProps = (state) => ({
    chat: state.chat
})

export const mapDispatchToProps = (dispatch) => ({
    message: (data) => dispatch(chatActions.message(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Chat);

