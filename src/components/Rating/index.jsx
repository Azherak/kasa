import React from "react";
import star from "../../assets/star.png";
import starRed from "../../assets/starRed.png";

function Rating({ rating }){
    let stars = [];
    let ratingNumber = Number(rating);
    for(let i = 0; i < 5; i++){
        if(i < ratingNumber){
            stars.push(<img key={i} src={starRed} className="star red-star" alt="star"/>);
        } else {
            stars.push(<img key={i} src={star} className="star" alt="star"/>);
        }
    }
    return(
        <div id="stars-container">
            {stars}
        </div>
    )
}


export default Rating;
