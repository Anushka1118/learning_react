import data from "../travel_data"


export default function Entry(props){

    
    //console.log(props)
    return(
        <article className="journal">
            <div className="fuji_pic">
                <img src={props.entry.img.src} alt={props.entry.img.title}/>
            </div>

            <div>
                <div className="mark">
                    <img
                     className=" fuji " 
                     src={props.entry.map.src} alt={props.entry.map.alt}/>
                    <span> {props.entry.country} </span>
                    <a href={props.entry.googlemap}>view detail</a>
        
                </div>
        
                <h2>{props.entry.title}</h2>
                <h3 className="para"> {props.entry.text}</h3>
            </div>
        
        </article>
    )
}