import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(15)
  let [message, setMessage] = useState('You can add value')

  const addValue = () => {
    if (counter<30){
      setCounter(counter + 1)
    }
    else{
      setMessage("Limit of counter is till 30")
    }
  }

  const deleteValue = () => {
    if (counter>0){
      setCounter(counter - 1)
    }
    else{
      setMessage("Counter can't be below zero")
    }
  }

  return (
    <>
      <h1>React Js</h1>
      <h2>Counter</h2>
      <h3>Value = {counter} </h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={deleteValue}>Delete Value</button>
      <p>{message}</p>
    </>
  )
}

export default App
