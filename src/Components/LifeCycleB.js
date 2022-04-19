import React, { Component } from 'react'

export class LifeCycleB extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Niharika'
      }
      console.log('LifeCycle B Constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle B getDerivedStateFromProps');
        return null ; 
    } //make sure to add the static keyword, else the method will be ignored. 


    componentDidMount(){
        console.log('LifecYcle B componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifecYcle B shouldComponentUpdate');
      return true;
    }

    getSnapshotBeforeUpdate(){
      console.log('LifecYcle B getSnapshotBeforeUpdate');
      return null;
    }

    componentDidUpdate(){
      console.log('LifecYcle B componentDidUpdate');
    }

    render() {
        console.log('Lifecycle B render()');
    return (
      <div>
          Life Cycle B
      </div>
    )
  }
}

export default LifeCycleB