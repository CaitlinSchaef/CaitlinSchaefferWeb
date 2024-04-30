import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogContent from "./BlogContent"

function PullMostRecent() {
    return (
                <div>
                   <h2 className="CurrentTitle"> {BlogContent.title} </h2>
                  <h5 className="CurrentDate">{BlogContent.date} </h5>
                   <p className="CurrentContent overflow-scroll" style={{height: "65vh"}}> {BlogContent.content} </p>
                </div>
            )
}


function BlogFunction() {
    return (
      <div className="p-5">
        <PullMostRecent />
      </div>
    )
  }
  
  
  export default BlogFunction