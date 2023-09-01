import React from "react";
import './NotFound.css';
import { SectionWrapper } from "../../Components";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        <SectionWrapper>
            <h2>Sorry</h2>
            <h1>404</h1>
            <p>That page cannot be found</p>
            <Link to={'/'}>Back to the home page...</Link>
        </SectionWrapper>
        </>
     );
}
 
export default NotFound;