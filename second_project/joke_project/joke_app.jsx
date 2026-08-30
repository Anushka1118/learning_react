import Jokes from "./jokes"
import { createRoot } from "react-dom/client";

const root=createRoot(document.getElementById("root"))
root.render(
    <main>
        <Jokes
            punchline="I told my computer I needed a break—it said, 
            “No problem, I’ll go to sleep.” "       //string value
            upvote={1}    //int value
            isPun={true} //bool value
        />
        <Jokes
            setup="i got my son fridge for his bday."
            punchline="i cant wait to see his face light up when he opens it."
        />
        <Jokes
            setup="how did hacker escape the police?"
            punchline="he just ransomware."
        />
        <Jokes
            setup="whats the best thing about switzerland?"
            punchline="dont know but the flag is a big plus!"
        />
        <Jokes
            setup="why do bees stay in hive during winter?"
            punchline="swarm"
        />

    </main>
)