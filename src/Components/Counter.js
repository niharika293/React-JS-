import React, { Component } from 'react'

class Counter extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment(){
        // this.state.count +=1;
        // console.log("this.state.count", this.state.count);
        // We should not modify the state  directly,  
        // without using setState (). This will bring the changes in the console, but won't re-render the updated changes in the UI.  

        // this.setState({
        //     count : this.state.count + 1 //async
        // }, 
        // () => {
        //     console.log("Callback value", this.state.count); //async
        // });

        this.setState((prevState) => ({
            count : prevState.count + 1
        }))

        console.log("this.state.count", this.state.count); // synchronous
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
  
    render() {
    return (
      <div>
          <div>
            Count - {this.state.count}
          </div>
          <button onClick={ () => this.incrementFive() }> Increment </button>
      </div>
    )
  }
}

export default Counter