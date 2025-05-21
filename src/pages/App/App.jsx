import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';
import Footer from '../../components/Footer/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// src/pages/App.jsx

function App () {

  return (
    <>
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
              <Experience />
            </Col>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;