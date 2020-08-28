import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

class ParentComponent2 extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vishwas'
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: 'Vishwas'
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent Component render')
        return (
            <div>
             Parent Component
             <MemoComponent name={this.state.name} />
             {/* <RegularComponent name={this.state.name} />
             <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComponent2
