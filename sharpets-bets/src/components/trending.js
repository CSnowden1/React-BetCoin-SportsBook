import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BettingCard from './bettingCard'; // Assuming BettingCard is in the same directory

const TrendingBets = () => {
    // Example data for the betting cards
    const betsData = [
        {
            matchup: "Chargers vs. Raiders",
            open: "-2.5",
            spread: "+3",
            total: "O 33.5",
            moneyline: "+135",
            date: "Thursday",
            time: "8:15 p.m. December 14, 2023"
        },
        // ... additional bet data objects
    ];

    return (
        <Container>
            <h2 className="my-4">Trending Bets</h2>
            <Row>
                {betsData.map((bet, idx) => (
                    <Col key={idx} md={4} className="d-flex align-items-stretch">
                        <BettingCard {...bet} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TrendingBets;
