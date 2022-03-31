import React from "react";


const Hello = () => {
    // JSX Expression
    // return <div>
    //     <h1>Hello Niharika</h1>
    // </div>
    // Without using JSX
    // return React.createElement('div',null,'Hello Niharika');
    // here h1 is missing.
    // return React.createElement('div',null,'<h1>Hello Niharika</h1>'); // h1 will be rendered as inner text

    // Now, we'll pass h1 as a child
    // return React.createElement('div',null,'h1','Hello Niharika'); // Now, div will have 2 children -> h1 & Hello Text


    // We've to call createELement again for h1.
    // 2nd parameter accepts key-value pairs, we can;'t use "class" keyword as this is reserved in JS
    // className shud be used! class is also acceptable in latest react versions
    

    return React.createElement('div',
   {id : 'test', class: 'dummy-class'},
    React.createElement('h1',null,'Hello Niharika'));



}


export default Hello;