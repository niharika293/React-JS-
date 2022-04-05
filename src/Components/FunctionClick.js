import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Button Clicked!");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* <button onClick={clickHandler()}>Click</button> */}
            {/* in 2nd, the () will execute automatically even if we don't click it. And if we click it, the () won't execute. */}
            {/* Event handler is a () not a () call. Do not add the parantheses.   */}
        </div>
    )
}

export default FunctionClick