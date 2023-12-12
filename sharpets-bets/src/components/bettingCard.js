import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

const BettingCard = ({ matchup, open, spread, total, moneyline, date, time }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Header as="h5">{matchup}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Open: {open}</ListGroup.Item>
                <ListGroup.Item>Spread: {spread}</ListGroup.Item>
                <ListGroup.Item>Total: {total}</ListGroup.Item>
                <ListGroup.Item>Moneyline: {moneyline}</ListGroup.Item>
            </ListGroup>
            <Card.Footer className="text-muted">
                {date} {time}
            </Card.Footer>
            <Button variant="primary">Place Bet</Button>
        </Card>
    );
};

export default BettingCard;
