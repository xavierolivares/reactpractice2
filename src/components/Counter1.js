import React, { Component } from 'react'

// container component where we implement the common functionality
class Counter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter1
