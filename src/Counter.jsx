import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    // console.log(abc)
    const addHandle = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{ border: '2px solid blue' }}>
            <h3>Counter: {count}</h3>
            <button onClick={addHandle} style={{ margin: '10px' }}>Add</button>
            <button onClick={handleReduce}>reduce</button>
            {/* <button onClick={removeHandle}>Remove</button> */}
        </div>
    )
}