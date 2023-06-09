import React, { useState, useEffect, useMemo } from "react";

const initialPosition = {x: null, y: null}

const MouseApp = () => {
    
    const [position, setPosition] = useState(initialPosition);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const {clientX, clientY} = e;
            setPosition({
                x:clientX,
                y:clientY
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
    }, []);

    return(
        <div>
            <h2>Posicion raton con useEffect</h2>
            <pre>
                {JSON.stringify(position, null, 2)}
            </pre>
        </div> 
    )
}

export default MouseApp;