import React from "react";
import './Details.css';
import { SectionWrapper , BlogData, SecondaryButton} from "../../Components";
import { useParams } from "react-router-dom";
import useFetch from "../../Components/useFetch/useFetch";
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data : blog , error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
    
    const handleDelete = (id)=> {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(()=> {
            console.log(`BLog Deleted successfuly${blog.id}`)
            navigate('/blogs');
            
        })}
    return ( 
        <>
            <SectionWrapper>
            {isPending && <h4><span className="loading-icon">⌛</span> Looding ...</h4>}
            {error && <h4>{error}</h4>}
            { blog && 
                <BlogData key={blog.id} name={blog.name} userName={blog.userName}  AddedData={blog.data} hours={blog.hours} />
            }
            <div className="data-section-btn">
                    <SecondaryButton handleClick={()=> handleDelete(blog.id)}>Delete Blog</SecondaryButton>
                    </div>
            </SectionWrapper>
        </>
     );
}
 
export default Details;