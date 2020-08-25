import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Welcome, {this.props.name}! Your trait is {this.props.trait}.</h1>;
    }
}

export default Welcome;