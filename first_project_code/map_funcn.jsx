import { createRoot } from "react-dom/client";

const root=createRoot(document.getElementById("root"));
//const ninja=["Donatello","michael","Rafael","Leonardo"]
//const ninja=[<h2>Donatello</h2>,<h2>michael</h2>,<h2>Rafael</h2>,<h2>Leonardo</h2>]

root.render(
    <>
    
        <main>
            {ninja}
        </main>
    <SquareMap/> 
    <CapitalizeArr/>
    <MakeTag/>
    </>
)

function SquareMap(){
    const nums=[1,2,3,4,5]
    const sq= nums.map(function(num){
        return num*num
    });

    console.log(sq)

    return (
    <>
        {sq.map((val,ind)=>(
             <p key={ind}>{val}</p>
        ))}
    </>
    );
}

function CapitalizeArr(){
    const arr=["hello","world","of","coding"]

    const newarr=arr.map((ele)=>{
        return ele[0].toUpperCase()+ele.slice(1)
    })

    return(
        <>
        {newarr.map((el,i)=>{
           return  <p key={i}>{el}</p>
        })}
        </>
    )
}

function MakeTag(){
    const arr=["hello","world","of","react"]

    const tagarr=arr.map((ele)=>{
        return  "<p>"+ele+"</p>" 
    })

    return(
        <>
        {tagarr.map((el,i)=>{
            return <p key={i}>{el}</p> 
        })}
        </>
    )
}