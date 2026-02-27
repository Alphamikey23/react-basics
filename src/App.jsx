import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton  from './MyButton';
import AboutPage from './AboutPage';
import CatImage from './image.png';
import ProfileCat from './ProfileCat';
import ConditionalRendering from './ConditionalRendering';
import WelcomePage from './WelcomePage';
import RenderingLists from './RenderingLists';
import RespondingEvents from './RespondingEvents';
import UpdatingScreen from './UpdatingScreen';
import Html2jsx from './Html2jsx';
import Bio from './Bio.jsx';
import ClassComponent from './ClassComponent.jsx';


function App() {

  const [count,setCount] = useState(0);
    function handleClick() {
        setCount(count+1);
    }


  return (
    <>
    {/* <h2>Welcome to my app</h2> */}
      {/* <button>I'm a button</button> */}
      {/* <MyButton />
      <AboutPage />
	<img src={CatImage}  className="avatar" />
	<ProfileCat /> */}
  {/* <h1 className="welcome"> Hi, Welcome to react styling, This test should be red</h1> */}
  {/* <WelcomePage /> */}
  {/* <RenderingLists /> */}
  {/* <RespondingEvents /> */}
  {/* <UpdatingScreen /> */}
  {/* <h1> Sharing data between components</h1>
  <MyButton onClick={handleClick} count={count} />
  <MyButton onClick={handleClick} count={count}/> */}
  {/* <Html2jsx /> */}
  {/* <Bio /> */}
  <ClassComponent />
    </>
  )
}

export default App
