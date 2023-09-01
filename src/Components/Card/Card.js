import React from "react";
import './Card.css';
import {FaStar, FaHeart} from 'react-icons/fa6';

const Card = (props) => {
    return ( 
        <div className="most-popular-item">
            <div className="card-wrapper">
                <img className="most-popular-item-image" src={props.imageSrc} alt={props.imageAlt} />
                <div className="most-popular-item-content">
                    <h4 className="most-popular-item-name">
                        {props.name}<br/>
                        <span>{props.userName}</span>
                    </h4>
                    <ul>
                        <li><span style={{'color': 'var(--color-star-icon)'}}><FaStar/></span> <span>{props.stars}</span></li>
                        <li><span style={{'color': 'var(--color-heart-icon)'}}><FaHeart/></span> <span>{props.followers}</span></li>
                    </ul>

                </div>
            </div>   

        </div>
     );
}
 
export default Card;