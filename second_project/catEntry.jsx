/*export default function CatEntry(props){*/
export default function CatEntry({img,name,phn,mail}){  //destructing the prop object
    /*console.log(props)*/
    return(
        <article className="cat-card">
            <img
            /*src={props.img}
            src="./image/cat1.jpg"*/
            src={img}
            alt="{name} img"
            />
            <h3>{name}</h3>
            <div className="info">
                <img src="./image/call.png" alt="phone icon"/>
               
                <p>{phn}</p>
            </div>
            <div className="info">
                <img src="./image/mail.png" alt="mail icon"/>
                <p>{mail}</p>
            </div>

        </article>
    )
}

const person={
    name:"anu",
    roll:"01",
    city:"lko"

}
const{Name, roll}=person
console.log(Name)
console.log(person.name)