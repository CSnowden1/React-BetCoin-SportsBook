import React, { useState, useRef, useCallback } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavComponent = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm" style={{ fontWeight: 500 }}>
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'btn-primary', fontWeight: 'bold', fontSize: '1.5rem' }}>SportsBook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{ color: '#495057' }}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{ color: '#495057' }}>Live Bets</Nav.Link>
                        <Nav.Link href="#pricing" style={{ color: '#495057' }}>Upcoming Events</Nav.Link>
                        <Nav.Link href="#about" style={{ color: '#495057' }}>About Us</Nav.Link>
                        <Nav.Link href="#contact" style={{ color: '#495057' }}>Contact</Nav.Link>
                    </Nav>
                    <Button variant="outline-primary">Sign In</Button>
                    <Button variant="primary" className="ms-2">Join Now</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComponent;
