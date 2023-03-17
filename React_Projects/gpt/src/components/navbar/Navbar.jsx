import React from 'react';
import './navbar.css';
import { RiMenu3lLine, RiCloselin } from 

const Navbar = () => {
    return(
        <div className='gpt3__navbar'> 
            Navbar 
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'></div>
                <img src={logo} alt="logo" />
            </div>
        </div >
    )
}

export default Navbar