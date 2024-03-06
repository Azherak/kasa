import { useParams } from 'react-router-dom';
import InfoBox from "../About/InfoBox/index";
import data from "../../data.json"; 
import ImageCarousel from "./Carousel/index.jsx";
import "../../style/index.css";
import Rating from './Rating/index.jsx';

function Logements(){
    const {id} = useParams();
    const logement = data.find(item => item.id === id);
    if (!logement) {
        return <div>Logement non trouvé</div>; 
    } 
    return(
        <div className='logements'>
            <ImageCarousel pictures={logement.pictures}/>
            <div className='titre-hotes'>
                <div className='titre-tags'>
                    <div>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                    <div className='conteneur-box'>
                        {logement.tags.map((tag, index) => (
                            <div key={index} className='box-info'>{tag}</div>
                        ))}
                    </div>
                </div>
                <div className='hotes-rating'>
                    <div className='hotes'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="visage de l'hôte"></img>
                    </div>
                        <Rating rating={logement.rating}/>
                </div>
            </div>
            <div className='description-equipements'>
                <InfoBox word="Description" explanation={logement.description}/>
                <InfoBox word="Equipements" explanation={logement.equipments}/>
            </div>
        </div>
    )
}

export default Logements;