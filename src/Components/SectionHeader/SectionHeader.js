import React from "react";
import './SectionHeader.css';

const SectionHeader = (props) => {
    return ( 
        <div className="section-header">
                <h4>{props.title}</h4>
        </div>
     );
}
 
export default SectionHeader;