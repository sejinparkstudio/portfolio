import './Projects.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// src/components/Projects/Projects.jsx

const Projects = () => {

  return (
    <div className="projects">
      <Row className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="../assets/react.svg" width="100" height="50" />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                <small className="text-muted">Last updated 2 mins ago</small>
                <li>
                  <ul>"Desc"</ul>
                </li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;