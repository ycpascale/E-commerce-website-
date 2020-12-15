import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

function footer() {
    return(
        <Container fluid>
            <Row>
                <Col>
                    <div>
                    <ListGroup>
                        <ListGroup.Item style={{fontSize: "24px"}}>Info</ListGroup.Item>
                        <ListGroup.Item>About us</ListGroup.Item>
                        <ListGroup.Item>Accessories Sizing Chart</ListGroup.Item>
                        <ListGroup.Item>Return & Exchange Policy</ListGroup.Item>
                        <ListGroup.Item>Privacy Policy</ListGroup.Item>
                        <ListGroup.Item>Terms & Conditions</ListGroup.Item>
                    </ListGroup>
                    </div>
                </Col>
                <Col>
                    <h4>Sign up for our newspaper</h4>
                    <h6>Subscribe to receive updates, access to exclusive deals, and more</h6>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Your email"
                        aria-label="Your email"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary">Join</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item style={{fontSize: "24px"}}>Contact Us</ListGroup.Item>
                        <ListGroup.Item>Monday - Friday: 9:00 AM - 6:00 PM</ListGroup.Item>
                        <ListGroup.Item>Saturday - Sunday: 11:00 AM - 5:00 PM</ListGroup.Item>
                        <ListGroup.Item>ana&kim@customjewelry.com</ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                            <span className="footer-icon"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></span>
                            <span className="footer-icon"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></span>
                            <span className="footer-icon"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></span>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default footer;