import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// src/pages/App.jsx

function App () {

  return (
    <>
      <NavBar />
      <Container>
      <Row>
        <Col>
          <div className="main-container">
            <h1>Sejin Park</h1>
            <p>I craft digital experiences where beauty meets usability.</p>
          </div>
        </Col>
        <Col>
          <About />
          <Projects />
        </Col>
      </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;