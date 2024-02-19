import { useParams } from 'react-router-dom';
import InfoBox from "../About/InfoBox/index";
import data from "../../data.json"; 
import ImageCarousel from "./Carousel/index.jsx";
import "./Logements.css";

function Logements(){
    const {id} = useParams();
    const logement = data.find(item => item.id === id);
    if (!logement) {
        return <div>Logement non trouvé</div>; 
    } 
    return(
        <div className='logements'>
            <div>
                <ImageCarousel pictures={logement.pictures}/> 
            </div>
            <div className='titre-hotes'>
                <div>
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                </div>
                <div className='hotes'>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="visage de l'hôte"></img>
                </div>
            </div>
            <div className='rating-conteneur'>
                <div className='conteneur-box'>
                    <div className='box-info'>{logement.tags[0]}</div>
                    <div className='box-info'>{logement.tags[1]}</div>
                    <div className='box-info'>{logement.tags[2]}</div>
                </div>
                <div>rating</div>
            </div>
            <div className='description-equipements'>
                <InfoBox word="Description" explanation={logement.description}/>
                <InfoBox word="Equipements" explanation={logement.equipments}/>
            </div>
        </div>

    )
}

export default Logements;