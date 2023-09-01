import React from "react";
import './Buttons.css';



const SecondaryButton = ({handleClick, disabled, children}) => {
    return ( 
        <div className="button secondary-btn">
            {disabled && <button  className="not-active" onClick={handleClick}  disabled >{children}</button>}
            {!disabled && <button  className="active" onClick={handleClick}>{children}</button>}
        </div>
     );
}

export default SecondaryButton;
