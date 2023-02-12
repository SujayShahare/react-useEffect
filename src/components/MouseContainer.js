import React, { useState } from "react";
import MouseEffect from "./MouseEffect";

export default function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <MouseEffect />}
        </div>
    )
}    