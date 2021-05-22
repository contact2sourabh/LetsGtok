import React from 'react';
import {
    Jumbotron, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './last.css';
import icon from "./icon.png";
const LastSection = () => {
    return (
        <div className="last">
            <Jumbotron fluid>
                <Container fluid>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Why Lets Gtok ?</CardTitle>
                            <CardText>Lets Gtok aims to provide a safe space online for people  to share and connect with genuine feelings . Users can share their feelings or activities even without revealing their identity </CardText>
                            <Button variant="contained" color="primary" disableElevation>
                                Learn More
                            </Button>

                        </CardBody>
                    </Card>
                    <img className="icon" src={icon} alt="icon" />

                </Container>
            </Jumbotron>
        </div>
    );
}
export default LastSection;