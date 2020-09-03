import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {

    static contextType = UserContext
    // limitation: static method only works with static method.

    render() {
        return (
            <div>
                Component E Context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext
// limitation: contexttype only works with one context

export default ComponentE
