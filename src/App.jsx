import { Link } from "react-router-dom"

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

function App() {
  return (
    <div 
      className="h-100 p-5"
      style={{ color: 'white' }}
    >
      <Link className="text-light" to='/contact'>Contacts</Link> <br></br>
      <Link className="text-light" to='/about'>About</Link>
      <Title />
    </div>
  )
}


export default App
