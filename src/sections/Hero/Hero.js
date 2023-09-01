import React from "react";
import './Hero.css';
import brand from '../../assets/images/body/ian-dooley-d1UPkiFd04A-unsplash.jpg';
import { SecondaryButton } from "../../Components";
import { Link } from "react-router-dom";
const Hero = () => {
    return ( 
            <div className="hero">
                <div className="left-hero"> 
                    <h1>Product Designer,<br/>maker, brand builder<br/>-and type lover.</h1>
                    <Link to={'/blogs'}><SecondaryButton className="btn">Brows Me</SecondaryButton></Link>
                </div>
                <div className="right-hero">
                    <img src={brand} alt="Designer'"/>
                </div>
            </div>
     );
}
 
export default Hero;