import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/__';

// Our Redux Actions
import * as chatActions from './actions';
import io from './io';
import {store} from '../../app/store';
import * as subscribers from './subscribers.js';

io(store,subscribers);

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
        // Call the messageCreate action with a packet for the server (meta and content)
        let packet = {
          content: this.state,
          meta: true,
        }
        this.props.message(packet);
    }

    render() {

        // TODO: Iterate the messages in state and display them nicely ...
        return (
            <div className='chat-container'>

                <ul>
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.content}
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
  message: (data) => dispatch(chatActions.message(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);
