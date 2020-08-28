import React, { Component } from 'react'

class RegularComponent extends Component {
    render(props) {
        console.log('Reg Component render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
