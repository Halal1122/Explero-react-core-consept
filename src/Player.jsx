import { useState } from "react"

export default function Player(){
    const [count, setCount]= useState(11)
    const addPlayer=()=>{
        const playerCount = count + 1;
        setCount (playerCount)
    }
    const removePlayer = ()=>{
        const playerCount = count -1;
        setCount(playerCount)
    }
    return(
        <div style={{border: '2px solid red', margin:'20px', padding: '20px'}}>
            <h1>Player: {count}</h1>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>remove</button>
        </div>
    )
}