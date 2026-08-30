import {createRoot} from "react-dom/client";

const root=createRoot(document.getElementById("root"))


//const root=createRoot(document.createElement(.header))

//vanilla js
{/*const h1=document.createElement("h1")
h1.textContent="this is imperative coding"
h1.className="header"
document.getElementById("root").appendChild(h1).render()*/}

const ls=["new skill","get ahead","build projects"]


function MainContent(){
    return <h1>react is awesome</h1>
}

/*ls.map((el)=>{
    root.render(el);
})*/
root.render(
    <h1 className="header">hello react</h1>,

   {/*<ul>
        <li>popular js framework</li>
        <li>more employable</li>
        <li>adding skill</li>
        
        ls.map((el)=>(
            <li>{el}</li>
        ))

        <MainContent/>
        <h1> react is great!</h1>
    </ul>*/}

    

)



