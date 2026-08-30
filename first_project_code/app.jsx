import { createRoot } from "react-dom/client";
import reactlogo  from "./React-Logo.png";
const root= createRoot(document.getElementById("root"))

root.render(
    
    <HeaderContent/>
    
)

function HeaderContent(){
    return(
    <nav>
        <img src={reactlogo} alt="logo" width="200 px"/>
        <span>ReactFacts</span>
    </nav>)
}
