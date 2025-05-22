import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


// src/App.jsx

function App () {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
      <Container>
        <Row className="justify-content-md-center">
          <div className="main-container row">
            <Col xs lg="6">
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>Sejin Park</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Software Engineer | Art Director</Card.Subtitle>
                  <Card.Text>
                    I craft digital experiences where beauty meets usability.
                  </Card.Text>
                  <Card.Link href="#">Email Link</Card.Link>
                  <Card.Link href="#">Github Link</Card.Link>
                  <Card.Link href="#">LinkedIn Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="6">
              <About />
              <Experience title="Software Engineer Fellow | General Assembly | Remote"/>
            </Col>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;