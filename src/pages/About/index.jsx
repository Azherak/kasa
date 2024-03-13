import React from "react";
import img from "../../assets/AboutFond.png";
import InfoBox from "../../components/InfoBox/index.jsx";

function About(){
    return(
        <div className="about">
            <div className="about-visuel">
                <img src={img} alt="montagnes et lac"></img>
            </div>
            <div>
                <InfoBox word="Fiabilité" explanation="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <InfoBox word="Respect" explanation="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de la plateforme." />
                <InfoBox word="Service" explanation="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de la plateforme." />
                <InfoBox word="Sécurité" explanation="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </div>
    )
}

export default About;