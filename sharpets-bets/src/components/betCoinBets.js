import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import BettingCard from './bettingCard'; // Ensure this is imported correctly

const initialBetsData = [
    // Assume each object has a 'sport' property for filtering
    { id: 1, sport: 'Football', /* ...other properties... */ },
    { id: 2, sport: 'Basketball', /* ...other properties... */ },
    { id: 3, sport: 'Baseball', /* ...other properties... */ },
    { id: 4, sport: 'Football', /* ...other properties... */ },
    { id: 5, sport: 'Basketball', /* ...other properties... */ },
    { id: 6, sport: 'Baseball', /* ...other properties... */ }
    // ... Add more bet data as needed
];

const sportsFilter = ['All', 'Football', 'Basketball', 'Baseball']; // Add more sports as needed

const BetCoinBets = () => {
    const [betsData, setBetsData] = useState(initialBetsData);
    const [activeSport, setActiveSport] = useState('All');

    const handleFilterClick = (sport) => {
        setActiveSport(sport);
        if (sport === 'All') {
            setBetsData(initialBetsData);
        } else {
            setBetsData(initialBetsData.filter(bet => bet.sport === sport));
        }
    };

    return (
        <Container className="my-5">
            <ButtonGroup aria-label="Sports filter">
                {sportsFilter.map(sport => (
                    <Button
                        key={sport}
                        variant={activeSport === sport ? 'primary' : 'secondary'}
                        onClick={() => handleFilterClick(sport)}
                    >
                        {sport}
                    </Button>
                ))}
            </ButtonGroup>

            <Row xs={1} md={3} className="g-4 mt-3">
                {betsData.map((bet, idx) => (
                    <Col key={bet.id}>
                        <BettingCard {...bet} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BetCoinBets;
