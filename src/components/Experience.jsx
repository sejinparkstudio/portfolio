import Projects from './Projects';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Experience = (props) => {

  return (
      <div className="experience">
        <Row className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
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