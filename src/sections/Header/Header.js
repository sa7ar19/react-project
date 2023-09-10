import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import NavItem from '../../Components/NavItem/NavItem';
import {FaBars, FaXmark} from 'react-icons/fa6'; 


const Header = () => {
   
    const items = [
        {name:"Home",link:'/', id: 1},
        {name:"Blogs",link:'/blogs', id: 2},
        {name:"Create",link:'Create', id: 3},
        {name:"To_Do",link:'/todo', id: 4},
        {name:"Feedback",link:'feedback', id: 5},
    ];
    /* Hide Navbar on scroll */
    let scroll1 = window.scrollY;
    window.onscroll = function(){
        let scroll2 = window.scrollY;
        if (scroll1 > scroll2) {
            document.querySelector("nav").style.top = "0";
        }else {
            document.querySelector("nav").style.top = "-100px";
        }
        scroll1 = scroll2;
    }
    return ( 
        <>
        <nav>
            <Link to="/"><label className="logo">DesignX</label></Link>
            <input type="checkbox" id='check'/>
            <label for="check" className="icon">
                <i id='menu-icon'><FaBars/></i>
                <i id='close-icon'><FaXmark/></i>
            </label>
            <ul className="nav-ul">
                {
                    items.map((item)=>(
                        <NavItem key={item.id} id={item.id} link={item.link}>{item.name}</NavItem>
                        ))
                    }
                {/* ... Drop Down list for responsive */}
            </ul>
        </nav>
        </>
     );
}
 

export default Header;