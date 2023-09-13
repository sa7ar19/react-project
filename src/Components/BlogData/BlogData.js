import React from "react";
import './BlogData.css'; 

const BlogData = ({body , tags , id}) => {
    

    return ( 

            <div className="blog-lis-card">
            <ul>
                <li><h4>{body}<br/></h4></li>
                {tags.map(tag => (
                <li key={tags.id}><h4>tags : <br/><span>{tag}</span></h4></li>
                ))}
            </ul>
        </div>
     );
}
 
export default BlogData;