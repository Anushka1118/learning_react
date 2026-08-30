export default function Entry(props){
    return(
        <article className="journal">
            <div className="fuji_pic">
                <img src="./fuji.jpg" alt="fuji"/>
            </div>

            <div>
                <div className="mark">
                    <img className=" fuji " src="../marker.png" alt="map marker icon"/>
                    <span> Japan </span>
                    <a href="https://en.wikipedia.org/wiki/Mount_Fuji">view detail</a>
        
                </div>
        
                <h2>MOUNT FUJI</h2>
                <h3 className="para"> Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of
                Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 
                meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred
                mountains, and summit hikes remain a popular activity.</h3>
            </div>
        
        </article>
    )
}