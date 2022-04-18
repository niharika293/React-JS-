import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         'username' : 'ABC',
         'comments' : '',
         'topic' : 'react'
      }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username : event.target.value
        });
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        });
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        });
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} posted ${this.state.comments} on topic ${this.state.topic}` );
        event.preventDefault();
    }


  
    render() {
    const {username,comments, topic} = this.state; 
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange = {this.handleUserNameChange}></input>
                <br/>
                <label>Comments</label>
                <textarea value={comments} onChange = {this.handleCommentsChange}></textarea>
                <br/>
                <label>Topic</label>
                <select value={topic} onChange = {this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
                <br/>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
  }
}

export default Form