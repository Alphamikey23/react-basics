
import AboutPage from "./AboutPage";
import ProfileCat from "./ProfileCat";
import WelcomePage from "./WelcomePage";
export default function ConditionalRendering() {

let content,flag;

content = <WelcomePage />
if(flag == 0) {
    content = <AboutPage />


}
else {
    content = <ProfileCat />
}
// let isLoggedIn=0;
// function handleClick() {
//     isLoggedIn = 1;
//     if(isLoggedIn) {
//         content = <ProfileCat />;
    
//     }
//     else {
//         content = <AboutPage />;
//     }
//     console.log(typeof(isLoggedIn),isLoggedIn);
    
// }


return(<div>
    <button className="button">Click me for fav singer</button><br>
    </br>
    <button>Clicke me for CAT!!!</button>
    {content}
    </div>)
    
    
}

