import { useParams } from 'react-router-dom';
import InfoBox from "../About/InfoBox/index";
import data from "../../data.json"; 
import ImageCarousel from "./Carousel/index.jsx";

function Logements(){
    const {id} = useParams();
    const logement = data.find(item => item.id === Number(id));
    if (!logement) {
        return null; 
    } 
    return(
        <div>
            <div>
                <ImageCarousel images={logement.pictures}/> 
            </div>
            <div>
                <div>
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                </div>
                <div>
                    <h3>{logement.host.name}</h3>
                    <img src={logement.host.picture} alt="visage de l'hôte"></img>
                </div>
            </div>
            <div>
                <div>
                    <div>{logement.tags[0]}</div>
                    <div>{logement.tags[1]}</div>
                    <div>{logement.tags[2]}</div>
                </div>
                <div>rating</div>
            </div>
            <div>
                <InfoBox word="Description" explanation={logement.description}/>
                <InfoBox word="Equipements" explanation={logement.equipments}/>
            </div>
        </div>

    )
}

export default Logements;