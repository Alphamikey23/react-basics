export default function RespondingEvents () {

    function ClickHandler() {
        alert("You had clicked the button!");
    }


    return(
        <>
        <button onClick={ClickHandler}>Click me!</button></>
    )
}