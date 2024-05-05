import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Headshot from '../assets/headShotA.jpeg'
import Image from 'react-bootstrap/Image';
import { MdOutlineEmail } from "react-icons/md";


const Body = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs"
    >
  {/* <div> */}
      <Container className="">
        <Row className="justify-content-md-center">
          {/* Putting the class name for CSS on the column is what allows for customization of the text background
          had to make xs=12 so that it was full width on the smallest screen */}
          <Col xs={12} md={4} className="justify-content-center text-center mb-3 aboutBody">
                <h1><strong>Contact Me:</strong></h1>
                  <img
                    alt="Headshot"
                    src={Headshot}
                    width="150"
                    height="auto"
                    className="text-center"
                  />
                  <MdOutlineEmail />
          </Col>
        </Row>
      </Container>
    {/* </div> */}
    </ThemeProvider>
  )
}


function ContactLink() {
 return (
  <div className="p-5">
    <Body />
  </div>
 )
}

// the link to = '/' the slash is the home page app 


export default ContactLink