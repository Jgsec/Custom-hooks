import React from "react";
import useCounter from "../hooks/useCounter";

const CustomCounterApp = () => {

    const [counter, increment, decrement, reset] = useCounter();

    return(
        <div>
            <h2>Contador con useCounter</h2>
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

export default CustomCounterApp;