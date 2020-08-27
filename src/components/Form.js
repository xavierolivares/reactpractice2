import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleTextChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleTopicChange = e => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
        // this.setState({
        //     topic: e.target.value
        // })
    }
    
    render() {
        const {username, comments, topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={this.handleChange}
                        />
                        <h1>{`username ${username}`}</h1>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea 
                            value={comments} 
                            onChange={this.handleTextChange}
                            >
                        </textarea>
                        <h1>{`textarea ${comments}`}</h1>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                        <h1>{`select ${topic}`}</h1>
                    </div>
                    <button type="submit">Submit</button>
                </form>   
            </div>
        )
    }
}

export default Form
