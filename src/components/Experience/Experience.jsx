import './Experience.css';
import Projects from '../../components/Projects/Projects';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// src/components/Experience/Experience.jsx

const Experience = () => {

  return (
      <div className="experience">
        <Row className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>Experience Title</Card.Title>
                  <Card.Text>
                  <small className="text-muted">Software Engineer Fellow | General Assembly | Remote</small>
                  <Projects />
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

export default Experience;