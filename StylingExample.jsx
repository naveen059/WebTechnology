import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Button, Card, Container, Row, Col } from "react-bootstrap"; // Import React-Bootstrap Components

function StylingExample() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Bootstrap Class Usage */}
          <div className="text-center p-3 bg-primary text-white rounded">
            <h3>Using Bootstrap Classes</h3>
            <p>This section uses direct Bootstrap classes for styling.</p>
            <button className="btn btn-light">Bootstrap Button</button>
          </div>
        </Col>

        <Col>
          {/* React-Bootstrap Component Usage */}
          <Card>
            <Card.Body>
              <Card.Title>Using React-Bootstrap Components</Card.Title>
              <Card.Text>
                This section uses React-Bootstrap components for styling.
              </Card.Text>
              <Button variant="primary">React-Bootstrap Button</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StylingExample;
