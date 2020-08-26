import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name, trait} = this.props
        // const {state1, state2} = this.state
        return <h1>Welcome, {name}! Your trait is {trait}.</h1>;
    }
}

export default Welcome;