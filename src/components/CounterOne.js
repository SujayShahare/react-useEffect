import React, { useState, useEffect } from 'react';

export default function CounterOne() {

    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect triggered');
        document.title = `You clicked ${count} times!`
    }, [count])

    return (
        <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>click {count} times</button>
        </div>
    )

}