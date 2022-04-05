import React, {Component} from 'react';

class Welcome extends Component{
    render(){
        const {name, heroName} = this.props;
        return(
            <div>
                {/* <h1>Class Component, Hi {this.props.name} aka {this.props.heroName}</h1> */}
                <h1>Class Component, Hi {name} aka {heroName}</h1>
            </div>
        ) 
    }
}

export default Welcome;