import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {myButton} from './MyButton'




function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      {/* <button>I'm a button</button> */}
      <myButton />
    </>
  )
}

export default App
