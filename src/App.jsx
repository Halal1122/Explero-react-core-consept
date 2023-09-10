import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Counter'
import Counter from './Counter'
import Player from './player'
import Users from './Users'
import Friends from './Friends'


function App() {


  function clickHandle() {
    alert('button clicked')
  }
  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>



      <button onClick={clickHandle}>Click Me</button>
      <button onClick={() => addToFive(59)}>sum</button>
    </>
  )
}

export default App
