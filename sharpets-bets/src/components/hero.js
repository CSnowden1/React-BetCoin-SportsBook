import React, { useState, useRef, useCallback } from 'react';
import { Button, Container } from 'react-bootstrap';
import '../App.css'


const HeroComponent = () => {



    return (
        <div class="jumbotron">
            <Container>
                <h1>Welcome to SportsBook</h1>
                <p>
                    Join the ultimate sports betting experience. Bet on your favorite sports and events today.
                </p>
                <Button variant="primary" size="lg">Join Now</Button>
                <Button variant="outline-light" size="lg" className="ms-2">Learn More</Button>
            </Container>
        </div>
    );
}

export default HeroComponent;
