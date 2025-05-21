import './About.css';

import Card from 'react-bootstrap/Card';

// src/components/About/About.jsx

const About = () => {

  return (
    <>
      <div className="about">
        <Card className="border-0">
          <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
              With a background in             <Card.Link href="#">metal craft & design</Card.Link> and art direction, I bring a unique blend of visual expertise and technical problem-solving to full-stack development. Early in my career, working with both 2D and 3D software sparked a deep interest in computer engineering, leading me to create seamless, visually compelling user experiences that merge aesthetics with functionality. My goal is to create tools that are intuitive, impactful, and visually memorable.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;