import { Link } from "react-router-dom"
import Navbar from "/src/NavBar.jsx"

const Title = () => {
  return (
    <h1>
      App Page
    </h1>
  )
}

function App() {
  return (
    // This is the parent
    <div 
      className="h-100 p-5"
      style={{ color: 'white' }}
    >
      <Navbar />
      <Title />
    </div>
    // This is the end of the parent div
  )
}


export default App
