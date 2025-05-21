import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';

// src/components/Footer/Footer.jsx

const Footer = () => {

  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Link1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Art (coming soon)
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Sejin &copy;</p>
    </>
  );
};

export default Footer;