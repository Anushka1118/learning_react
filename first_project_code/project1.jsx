import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root=createRoot(document.getElementById("root"))
root.render(
   <PageContent/>
    
    /*<>
    <h1>lets start project 1</h1>
    <img src="oop1.PNG" alt="demo" width="40 px"/>
    <ul>
        <li>released in 2013</li>
        <li>by jorden walker</li>
        <li>200k + likes on github</li>
        <li>by meta</li>
        <li>manage app and webapps</li>
    </ul>
    </>*/
    
)
function PageContent(){
    return(
    <>
    <HeaderContent/>
    <ReasonToLearn/>
    <FooterContent/>
    </>
    )
}

function EgHeaderContent(){   //camel case with first letter capital too
    return(
        <header>
    <h1>lets start project 1</h1>

    <img src="oop1.PNG" alt="demo" width="400 px"/>

    <ul >
        <li>released in 2013</li>
        <li>by jorden walker</li>
        <li>200k + likes on github</li>
        <li>by meta</li>
        <li>manage app and webapps</li>
    </ul>
    </header>
    )
}

function HeaderContent(){
    return(
        <header className="header">
            <img src="oop1.PNG" width="200 px" alt="img demo"/>
            <nav>
                <ul className="nav_list" >
                    <li className="li_children">Pricing</li>
                    <li className="li_children">About</li>
                    <li className="li_children">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
 function ReasonToLearn(){
    return(
        <ul>
        <li>1.new skill</li>
        <li>2.placement</li>
        <li>3.building prjects</li>
        </ul>
    )
 }

function FooterContent(){
    return(
        <footer className="footer">@2026 anushka development, all rights reserved</footer>
    )
}
