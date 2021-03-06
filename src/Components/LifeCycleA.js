import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Niharika'
      }
      console.log('LifeCycle A Constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps');
        return null ; 
    } //make sure to add the static keyword, else the method will be ignored. 


    componentDidMount(){
        console.log('LifecYcle A componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifecYcle A shouldComponentUpdate');
      return true;
    }

    getSnapshotBeforeUpdate(){
      console.log('LifecYcle A getSnapshotBeforeUpdate');
      return null;
    }

    componentDidUpdate(){
      console.log('LifecYcle A componentDidUpdate');
    }

    changeState = () => {
      this.setState({
        name : 'Niharika Gurnani'
      })
    }

    render() {
        console.log('Lifecycle A render()');
    return (
      <div>
          Life Cycle A <br/>
          <button onClick={this.changeState}>Change State</button>
          <p> Name : {this.state.name}</p>
          <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA