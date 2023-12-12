import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const BetcoinSection = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Card className="mb-3">
            <Card.Img variant="top" src="betcoin-image-url" /> {/* Replace with your image URL */}
            <Card.Body>
              <Card.Title>Introducing Betcoin</Card.Title>
              <Card.Text>
                Betcoin is the premier cryptocurrency for sports betting. Seamlessly trade and place bets across various sportsbooks that accept Betcoin. Enjoy lower fees, faster transaction times, and enhanced security. Sign up now to connect your wallet and start trading Betcoin today!
              </Card.Text>
              <Button variant="primary">Sign Up and Connect Wallet</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h2>Why Betcoin?</h2>
          <p>Trade between sportsbooks: With Betcoin, you can easily trade your bets between different sportsbooks that use our currency, allowing for more flexibility and better odds.</p>
          <p>Lower fees: We offer significantly lower transaction fees compared to traditional banking methods, meaning more of your money goes to your bets.</p>
          <p>Faster transactions: Betcoin transactions are fast, ensuring that your funds are available when you need them.</p>
          <p>Enhanced security: Utilize the inherent security features of blockchain technology with Betcoin.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default BetcoinSection;
