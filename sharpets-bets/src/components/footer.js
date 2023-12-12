import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>SportsBook</h5>
                        <p>Join the ultimate sports betting platform. Bet and trade with confidence and ease.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>
                            SportsBook Inc.<br />
                            123 Betting Ave<br />
                            Las Vegas, NV 89101<br />
                            <span>Email:</span> support@sportsbook.com<br />
                            <span>Phone:</span> (123) 456-7890
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        <p>© {new Date().getFullYear()} SportsBook, All rights reserved.</p>
                        <p>
                            <Nav.Link href="#terms">Terms of Service</Nav.Link>
                            <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
