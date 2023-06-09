import React from "react";
import useMousePosition from "../hooks/useMousePosition";

const CustomMouseApp = () => {

    const position = useMousePosition();

    return(
        <div>
            <h2>Posicion raton con useMousePosition</h2>
            <pre>
                {JSON.stringify(position, null, 2)}
            </pre>
        </div> 
    )
}

export default CustomMouseApp;