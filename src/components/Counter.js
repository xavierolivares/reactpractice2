import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    increment() {
        // never modify state directly. React will not rerender the state that way. Use setState to modify it
        // calls to setState are asynchronous
        // this.setState({
        //     count: this.state.count+1
        // }, () => console.log('callback value - state count', this.state.count) );

        // fix
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

        // calls to console log are happening synchronously
        console.log('synchronous count', this.state.count)
    }

    incrementFive() {
        // React may update the calls into a single update for better performance.
        // All five setState calls are done in a singleGo.
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter