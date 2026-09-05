
import Header from "./component/header"
import Entry from "./component/entry"
import data from "./travel_data"

export default function App(){
    
    const entry_ele=data.map((entry)=>{
        return(
            <Entry
            key={entry.id}
            entry={entry}
                /*img={entry.img}
                map={entry.map}
                title={entry.title}
                country={entry.country}
                googlemap={entry.googlemap}
                text={entry.text}*/
            />
        )
    })
    return(
        
        <>
            <Header/>
            <main className="container">
                {entry_ele}
                {/*<Entry
                img={{
                    src:"../fuji.jpg ", alt:" mount fuji"}}

                map={{
                    src:"../marker.png",alt:"map marker icon"
                }}
                title="mount fuji"
                country="japan"
                googlemap="https://en.wikipedia.org/wiki/Mount_Fuji"
                text="Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of
                Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 
                meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred
                mountains, and summit hikes remain a popular activity."
                />*/}
            </main>
            
        </>
        
    )
}

