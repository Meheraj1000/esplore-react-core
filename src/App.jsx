import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'
function App() {

  function handleClick(){
    alert('Button Clicked');
  }
  const handleClick2=()=>{
    alert('Button Clicked')
  }
  const addToFive=(num)=>{
    alert(num+5);
  }

  return (
    <>   
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
  
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     
     
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>alert('Thirt Clicked')}>Thirt</button>
      <button onClick={()=>addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
