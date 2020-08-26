import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vishwas</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // return this.state.isLoggedIn ? (
        //     <div>Welcome Vishwas</div>
        //     ) : (
        //     <div>Welcome Guest</div>
        //     )
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
        // if (this.state.isLoggedIn) {
        //     return (
        //         <h1>Welcome Vishwas</h1>
        //     )
        // } else  {
        //     return (
        //         <h1>Welcome Guest</h1>
        //     )
        // }
        // return (
        //     <div>
        //         <h1>Welcome Vishwas</h1>
        //         <h1>Welcome Guest</h1>
        //     </div>
        // )
    }
}

export default UserGreeting
