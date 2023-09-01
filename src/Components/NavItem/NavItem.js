import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => {
    return ( 
        <li>
            <Link to={props.link}>{props.children}</Link>
        </li>
     );
}
 

// const NavItemDropDown = () => {
//     return ( 
//         <>
//         </>
//      );
//     }
    
export default NavItem;
//export {NavItemDropDown};  //named item