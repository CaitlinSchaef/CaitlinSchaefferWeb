import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogContent from "./BlogContent"

function PullName() {
    return (
                <div>
                   <h2 className="Current title"> {BlogContent.title} </h2>
                  <h5 className="Current date">{BlogContent.date} </h5>
                   <p className="Current content"> {BlogContent.content} </p>
                </div>
            )
}


function BlogFunction() {
    return (
      <div className="p-5">
        <PullName />
      </div>
    )
  }
  
  
  export default BlogFunction