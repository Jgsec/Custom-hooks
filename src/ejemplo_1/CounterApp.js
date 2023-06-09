import React, { useState } from "react";

const CounterApp = () => {
    
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
    }

    const decrement = () => {
        setCounter(counter-1);
    }

    const reset = () => {
        setCounter(0);
    }


    return(
        <div>
            <h2>Contador con useState</h2>
            <h3>Clicks: {counter}</h3>
            <button onClick={decrement}>
                -
            </button>
            <button onClick={increment}>
                +
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div> 
    )
}

export default CounterApp;