import React from "react";

export default function MouseEffect() {

    const[x, setX] = React.useState(0)
    const[y, setY] = React.useState(0)

    const logMousePosition = e => {
        console.log('mose event');
        setX(e.clientX)
        setY(e.clientY)
    }

    React.useEffect(() => {
        // useEffect logic
        console.log('useEffect triggered!');
        window.addEventListener('mousemove', logMousePosition)

        // cleanup logic
        return () => {
            console.log('component unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}