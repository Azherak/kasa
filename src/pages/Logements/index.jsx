import { useParams } from 'react-router-dom';
import InfoBox from "../../components/InfoBox/index";
import data from "../../assets/data.json"; 
import ImageCarousel from "../../components/Carousel/index.jsx";
import Rating from '../../components/Rating/index.jsx';
import Error from '../Error/index.jsx';

function Logements(){
    const {id} = useParams();
    const logement = data.find(item => item.id === id);
    if (!logement) {
        return <Error/>; 
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