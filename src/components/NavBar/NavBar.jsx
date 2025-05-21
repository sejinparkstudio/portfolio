import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// src/components/NavBar/NavBar.jsx

const NavBar = () => {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">SJ</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;