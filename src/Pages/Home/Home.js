import React from "react";
import './Home.css';
import { Hero, MostPopular , Others } from '../../sections/index';


const Home = () => {
    return ( 
        <>
            <Hero />
            <MostPopular />
            <Others />
        </>
     );
}
 
export default Home;