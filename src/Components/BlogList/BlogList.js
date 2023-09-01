import { React } from "react";
import { Link } from "react-router-dom";
import './BlogList.css';
import { SectionHeader ,SectionWrapper, BlogData } from '../../Components/index';

import useFetch from "../../Components/useFetch/useFetch";


const BlogList = () => {
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs`);

    
    return ( 
        
        <>
                {error && <h4>{error}</h4>}
                {isPending && <h4><span className="loading-icon">⌛</span> Looding ...</h4>}
                {blog && blog.map( blog =>(
                <SectionWrapper >
                    <div className="data-section" key={blog.id}>
                        <SectionHeader title={blog.title} />
                        <Link to={`/blogs/${blog.id}`}>
                        <BlogData key={blog.id} name={blog.name} userName={blog.userName}  AddedData={blog.data} hours={blog.hours} /></Link>
                    
                    </div>
                </SectionWrapper>
                )
                )}
            </>
        
     );
}
 
export default BlogList;