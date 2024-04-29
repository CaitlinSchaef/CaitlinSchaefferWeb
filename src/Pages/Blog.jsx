import { Link } from "react-router-dom"
import Navbar from "/src/NavBar.jsx"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Body = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="mt-3 mb-3 ms-3 me-3">
      <Row className="justify-content-md-center">
        {/* Putting the class name for CSS on the column is what allows for customization of the text background
        had to make xs=12 so that it was full width on the smallest screen */}
        <Col xs={6} md={4} className="justify-content-center mb-3 text-center">
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}


function Blog() {
  return (
    <div className="p-5">
      <h1>Blog</h1>
      <Body />
    </div>
  )
}


export default Blog


/*
This is what Nathan's Blog page looks like:

import { IntroductoryHeader } from './IntroductoryHeader';
import BlogPostCardWrapper from './BlogPostCardWrapper';

function App() {
  return (
    <>
      <IntroductoryHeader />
      <BlogPostCardWrapper />
    </>
  );
}

export default App;

He has JSX files called: BlogPost, BlogPostCard, BlogPostCardWrapper, and IntroductoryHeader
the BlogPostCardWrapper pulls in the BlogPostCard and the blogPostsCards json

His BlogPost.jsx file is the actual blog display (and his app.jsx is what displays the cards)

So if I want the displays to be on my blog file, I need to have whats on his apps on my blog and then 

*/