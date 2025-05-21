import React from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar">
            <div>
            <ul className='nav-links'>
                <li><Link to='/Home'><img src='/imageset/logo.webp' className="nav_logo"></img></Link></li>
                <li><NavLink to='/Westock' className='nav-items'>Westock</NavLink></li>
                <li><NavLink to='/Aboutus' className='nav-items'>About us</NavLink></li>
                <li><NavLink to='/Products' className='nav-items'>Products</NavLink></li>
                <li><NavLink to='/Team' className='nav-items'>Team</NavLink></li>
                <li><NavLink to='/Career' className='nav-items'>Career</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;