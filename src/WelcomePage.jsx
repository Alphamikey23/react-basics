import ConditionalRendering from "./ConditionalRendering"

export default function WelcomePage() {
    function handleClick() {
        alert('enter clicked')
        
    }
    return(<>
    <h1>Yoy!! welcome to my homepage, Mix of wisdom and knowledge!</h1>
    <button onClick={event =>  window.location.href='/App.jsx'}>Enter..</button>
    </>)
}