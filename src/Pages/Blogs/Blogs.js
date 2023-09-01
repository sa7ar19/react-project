import { React} from "react";
import './Blogs.css';
import BlogList from "../../Components/BlogList/BlogList";

const Blogs = () => {
   
    return ( 
        <div className="blogs-wrapper">
            <BlogList />
        </div>
     );
}
 
export default Blogs;