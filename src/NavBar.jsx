import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import './NavBarStyle.css'


const MyNavbar = () => {
    let location = useLocation();
    console.log('location:', location.pathname)
    return (
        <>
      <Navbar className="">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to='/'>Caitlin Schaeffer</Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">

          <Navbar.Text className="nav-link">
          <Link className="nav-link" to='/portfolio'>Portfolio</Link> 
          </Navbar.Text>

          <Navbar.Text className="nav-link">
          <Link className="nav-link" to='/contact'>Contact</Link>
          </Navbar.Text>

          <Navbar.Text className="nav-link">
          <Link className="nav-link" to='/blog'>Blog</Link>
          </Navbar.Text>

          <Navbar.Text className="nav-link">
          <Link className="nav-link" to='/about'>About</Link>
          </Navbar.Text>

        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}


export default MyNavbar
// <nav className="navbar navbar-expand-lg">
//     <Link className="navbar-brand" to='/'>Caitlin Schaeffer</Link>
//     <ul className="navbar-nav">
//         <li className="nav-item">
//             <Link className="nav-link" to='/portfolio'>Portfolio</Link> <br></br>
//         </li>
//         <li className="nav-item">
//             <Link className="nav-link" to='/contact'>Contact</Link> <br></br>
//         </li>
//         <li className="nav-item">
//             <Link className="nav-link" to='/blog'>Blog</Link> <br></br>
//         </li>
//         <li className="nav-item">
//             <Link className="nav-link" to='/about'>About</Link> <br></br>
//         </li>
//     </ul>
// </nav>