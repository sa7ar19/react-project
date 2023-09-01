import React from "react";
import './MostPopular.css';
import { SectionHeader ,SectionWrapper,Card } from '../../Components/index';
import MostPopularData from "../../Data/MostPopularData";

const MostPopular = () => {
    const card = MostPopularData.map(item =>{
        return <Card key={item.id} imageSrc={item.imageSrc} imageAlt={item.imageAlt} name={item.name} userName={item.userName} stars={item.stars} followers={item.followers} />
    })
    return ( 
        <SectionWrapper>
            <SectionHeader title='Most Popular' />
            <div className="most-popular-items">
            {card}
            </div>

        </SectionWrapper>
     );
}
 
export default MostPopular;