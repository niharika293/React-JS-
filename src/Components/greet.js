import React from 'react';

// function Greet(){
//     return <h1>Hello Niharika</h1>
// }

// ES6 arrow ()
// Highly recommended to use props as a parameter in () name. It can be any other name, but let's not deviate
// from the standard. 

// destructuring in the () parameters
// export const Greet = ({name, heroName}) => {
//     // console.log(props);
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName} </h1>
//             {/* {props.children} */}
//         </div>
//     )
// } //Named Export

// Destructuring in the () body.  
export const Greet = (props) => {
    console.log(props);
    const {name, heroName} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName} </h1>
            {props.children}
        </div>
    )
}


export const Greet2 = () => <h1>Hello Niharika</h1>

// Named exports can be many, but they shud be reffered by the same name.

export default Greet;

// export default Greet2;

// Only 1 deafualt export allowed per file.
