import React from "react";
import './BlogData.css'; 

const BlogData = (props) => {
    

    return ( 

            <div className="blog-lis-card">
            <ul>
                <li><h4>{props.name}<br/><span>{props.userName}</span></h4></li>
                <li><h4>Added<br/><span>{props.AddedData}</span></h4></li>
                <li><h4>Hours Worked<br/><span>{props.hours}</span></h4></li>
            </ul>
        </div>
     );
}
 
export default BlogData;