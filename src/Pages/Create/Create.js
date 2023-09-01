import {React, useState} from "react";
import './Create.css';
import { SecondaryButton, SectionWrapper } from "../../Components";
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [hours, setHours] = useState('');
    const [data, setData] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, name, userName, hours, data };
        
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body : JSON.stringify(blog)
        }).then(()=> {
            console.log('New blog added');
            setIsPending(false);
            navigate('/blogs');
        })

         ; 
    }

    return ( 
        <div className="create">
            <SectionWrapper>
                <form onSubmit={handleSubmit}>
                <span className="contact2-form-title">
                    Create a New Blog
                </span>
                    <label>Blog title : </label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        />
                    <label>Name : </label>
                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                    <label>User name : </label>
                    <input 
                        type="text"
                        required
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}
                    />
                    <label>Hours Worked : </label>
                    <input 
                        type="number"
                        required
                        value={hours}
                        onChange={(e)=> setHours(e.target.value)}
                    />
                    <label>Data : </label>
                    <textarea
                        required
                        value={data}
                        onChange={(e)=> setData(e.target.value)}
                    ></textarea>
                    { !isPending && <SecondaryButton>CREATE</SecondaryButton>}                
                    { isPending && <SecondaryButton disabled={true}>Adding blog...</SecondaryButton>}                
                </form>
            </SectionWrapper>
        </div>
     );
}
 
export default Create;