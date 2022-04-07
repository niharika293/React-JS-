import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {

    // Approach 1 
    // if(this.state.isLoggedIn === true){
    //     return(
    //       <div>Welcome Niharika! </div>
    //     )
    // }
    // else{
    //     return(
    //       <div>Welcome Guest! </div>
    //     )
    // }

    //  Approach 2 – Using element variables, here you use  Javascript variables to store elements. 
    
    // let message;
    // if(this.state.isLoggedIn === true){
    //       message = <div>Welcome Niharika!</div>
    // }
    // else{
    //     message =  <div>Welcome Guest!</div>
    // }

    // return(
    //     <div>{message}</div>
    // )
    
    // Approach 3 – Ternary Operators 
    // Benefit – It can be used inside the JSX. 

    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Niharika! </div> :
    //     <div>Welcome Guest! </div>
    // )

    // Approach 4 – Short Circuit Operator 

    return(this.state.isLoggedIn && <div>Welcome Niharika! </div> )




    // Code without if else
    // return (
    //   <div>
    //       <div>Welcome Niharika! </div>
    //       <div>Welcome Guest! </div>
    //    </div>
    // )
  }
}

export default UserGreeting