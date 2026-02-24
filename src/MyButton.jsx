import {useState} from 'react';
export default function MyButton({ count, onClick}) {
    
        return(
        <>
        {/* <h2>Welcome to my app</h2> */}
        <button onClick={onClick}>Clicked {count} times</button>
        </>
    )
}

