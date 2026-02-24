import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton  from './MyButton';
import AboutPage from './AboutPage';
import CatImage from './image.png';



function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    {/* <h2>Welcome to my app</h2> */}
      {/* <button>I'm a button</button> */}
      <MyButton />
      <AboutPage />
	<img src={CatImage}  className="avatar" />
    </>
  )
}

export default App
