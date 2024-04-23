import { Link } from "react-router-dom"
import Navbar from "/src/NavBar.jsx"

function About() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>About Page</h1>
    </div>
  )
}


export default About

