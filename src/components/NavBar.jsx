import 'bootstrap/dist/css/bootstrap.min.css';
import sjicon from './../assets/sjicon.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
        <img
          src={sjicon}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;