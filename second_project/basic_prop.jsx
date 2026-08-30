import {createRoot}from  'react-dom/client'
import CatEntry from './catEntry';


function Example1(){
    const firstName="joe";
    const lastName="ray";
    const now_hour= new Date().getHours() ;
    let timeOfDay;

    if(now_hour<12){timeOfDay="morning"}
    else if(now_hour>=12 && now_hour<15){timeOfDay="afternoon"}
    else if(now_hour<21){timeOfDay="evening"}
    else{timeOfDay="night"}

    return(
        <>

        {/*<h1> hello {firstName} {lastName}  </h1>    
        <h1> good {timeOfDay}! it is currently {now_hour}</h1>*/}
        
        </>
    )
}

function Example2(){
    return(
        <div className='contact'>
            <CatEntry img="./image/cat1.jpg"
             name="cat1"
             phn="98900xxxxx"
             mail="cat1@gmail.com"/>

            <CatEntry img="./image/cat2.jpg"
             name="cat2"
             phn="98900xxxxx"
             mail="cat2@gmail.com"/>

            <CatEntry img="./image/cat3.jpg"
             name="cat3"
             phn="98900xxxxx"
             mail="cat3@gmail.com"/>
            
            <CatEntry img="./image/cat4.jpg"
             name="cat4"
             phn="98900xxxxx"
             mail="cat4@gmail.com"/>
            
            
            

        </div>
    )
}
createRoot(document.getElementById("root")).render(<Example2/>)