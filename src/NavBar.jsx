import './NavBarStyle.css'
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to='/'>Caitlin Schaeffer</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/portfolio'>Portfolio</Link> <br></br>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/contact'>Contact</Link> <br></br>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/blog'>Blog</Link> <br></br>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link> <br></br>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar