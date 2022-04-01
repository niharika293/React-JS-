import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        console.log(" this.state",  this.state);
        console.log("this.props", this.props);

        this.state = {
            message : 'Welcome Visitor'
        }
    }

    // Method 1

    
    // changeMessage() {
    //     this.setState({
    //         message : 'Thank you for subscribing!'
    //     });
    // } 

    changeMessage = () => {
        this.setState({
            message : 'Thank you for subscribing!'
        });
    }  //Method 2
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={() => this.changeMessage()}>Subscribe!</button> Method 1 */}
                {/* Method 2 */}
                <button onClick={this.changeMessage}>Subscribe!</button> 
            </div>
        ) 
    }
}

export default Message;