import React from 'react';

// function Greet(){
//     return <h1>Hello Niharika</h1>
// }

// ES6 arrow ()

export const Greet = () => <h1>Hello Niharika</h1> //Named Export

export const Greet2 = () => <h1>Hello Niharika</h1>

// Named exports can be many, but they shud be reffered by the same name.

export default Greet;

// export default Greet2;

// Only 1 deafualt export allowed per file.
