import React, { Component } from 'react'

class HoverCounter2 extends Component {
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
        const {count} = this.state
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hovered {count} Times</h2>
            </div>
        )
    }
}

export default HoverCounter2
