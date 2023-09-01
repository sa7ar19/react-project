import React from "react";
import './Others.css';
import { SectionHeader , SectionWrapper , DataSection} from "../../Components";
import OtherData from '../../Data/OthersData';




const Others = () => {

    const cards = OtherData.map(item => {
        return <DataSection key={item.id} link={item.link} name={item.name} userName={item.userName}  AddedData={item.AddedData} hours={item.hours} />
    })
    
    return ( 
        <SectionWrapper>
            <SectionHeader title="Others"/>
            <div className="data-sections">
                {cards}
            </div>

        </SectionWrapper>
     );
}
 
export default Others;