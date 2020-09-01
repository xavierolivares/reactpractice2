import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class HoverCounter extends Component {
    render() {
        const {count, incrementCount, name} = this.props
        return (
            <div>
              <h2 onMouseOver={incrementCount}>{name} Hovered {count} Times</h2>  
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)