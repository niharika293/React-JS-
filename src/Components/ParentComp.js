import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

 class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Niharika'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Niharika'
            });
        }, 2000);
    }

    render() {
        console.log("***Parent Component Render***");
        return (
            <div>
                Parent Component <br/>
                <RegComp name = {this.state.name}></RegComp>
                <PureComp name = {this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp