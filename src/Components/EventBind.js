import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this); Method 3
    }
    // clickHandler(){
    //     this.setState({
    //         message : 'Goodbye!'
    //     });
    //     console.log("this", this); // this undefined here when used with A. // to be confirmed - since, this refers to global object in js. 
    // }

    // Final approach – To use an arrow () as a class property. Basically change the way you define your method in the class.

    clickHandler = () => {
        this.setState({
            message : 'Goodbye!'
        });
        console.log("this", this);
    }

    render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* A. <button onClick={this.clickHandler}>Click</button> */} 
          {/* Ways of binding event to this  */}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

          {/* USe – Arrow () in the render () */}
          {/* <button onClick={ () => this.clickHandler()}>Click</button> */}

          {/* Mostly used approach, presented in react docs too. Concerns with binding the event handlers in the constructor as opposed to binding in render (). */}
        
          <button onClick={this.clickHandler}>Click</button> 


      </div>
    )
  }
}

export default EventBind