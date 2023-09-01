import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright © <Link to="#">DesignX</Link> Company. All rights reserved.
                        <br/>Design: <Link to='google.com' target="_blank" title="free css templates">Templates</Link></p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 

export default Footer;