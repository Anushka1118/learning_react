export default function Joke(props){
    console.log(props.upvote+1)
    return(
        <>
        {props.setup && <p className="setup">setup: {props.setup}</p>} {/*conditionalrendering*/}
        <p>punchline: {props.punchline}</p>
        <hr/>
        </>
        
    )
}