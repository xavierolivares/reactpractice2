import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        if (this.state.message === 'You are subscribed') {
            this.setState({
                message: 'You are already subscribed'
            }) 
        } else {
            this.setState({
                message: 'You are subscribed'
            })
        }
    }
    render () {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=>this.changeMessage()}>
                    Subscribe
                </button>
            </div>
        )
    }
}

export default Message;