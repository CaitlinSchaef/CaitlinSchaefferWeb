
import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Shrine from '../assets/tokyoShrine.jpeg'

const Body = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="mt-3 mb-3">
      <Row className="justify-content-md-center aboutBody">
        <Col className="justify-content-center text-center mb-3" md="auto">
              <h1><strong>Get to know me:</strong></h1>
                <p>
                If I needed to boil myself down to a few words, I would feel content with: thinker, traveler, reader, and gourmet. <br></br>
               lalalala <br></br>
                lalalala <br></br>
               lalalala <br></br>
                lalalal <br></br>
               lalalala
                </p>
            <br></br>
            <br></br>
        <img
              alt="Tokyo Shrine"
              src={Shrine}
              width="200"
              height="auto"
              className="d-inline-block align-top mt-2"
            />
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}



function About() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}


export default About

