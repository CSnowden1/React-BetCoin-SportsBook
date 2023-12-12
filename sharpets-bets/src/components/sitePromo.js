import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const SignUpPromo = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Header as="h4">Exclusive Offer</Card.Header>
            <Card.Body>
              <Card.Title>Sign Up & Get a Free $100 Bet!</Card.Title>
              <Card.Text>
                Join our sportsbook today and get a free bet worth up to $100. Don't miss out on this limited time offer. Start betting on your favorite sports right away!
              </Card.Text>
              <Button variant="success" size="lg">Sign Up Now</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Terms and conditions apply.</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpPromo;
