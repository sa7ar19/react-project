import React from "react";
import './DataSection.css'; 
import { SecondaryButton } from "../index";
import { useState } from "react";
const DataSection = (props) => {
    const [clicked, setClicked] = useState(false);
    const [followVal, setFollowVal] = useState('NonFollow');
    const [followBtn, setFollowBtn] = useState('Follow Me');
    const handleClick = () => {
        if(clicked === false){
            setClicked(true);
            setFollowVal('Followed');
            setFollowBtn("Unfollow");
        }else {
            setClicked(false);
            setFollowVal('NonFollow');
            setFollowBtn("Follow Me");   
        }
    }

    return ( 
        <div className="data-section-card">
            <ul>
                <li className='others-image'><img src={props.link} alt="#" /></li>
                <li><h4>{props.name}<br/><span>{props.userName}</span></h4></li>
                <li><h4>Added<br/><span>{props.AddedData}</span></h4></li>
                <li><h4>Hours Worked<br/><span>{props.hours}</span></h4></li>
                <li><h4>{followVal}</h4></li>
                <SecondaryButton handleClick={handleClick}>{followBtn}</SecondaryButton>
            </ul>
        </div>
     );
}
 
export default DataSection;