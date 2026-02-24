import {useState} from 'react';
export default function UpdatingScreen() {
    const [count,setCount] = useState(0);

    function HandleClick() {
        setCount(count + 1);
    }

    return(
        <>
        <button onClick={HandleClick}> Click me</button>
        <h1> You had clicked the button {count} times</h1>
        </>
    )
}