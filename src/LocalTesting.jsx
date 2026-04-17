import { useState } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import Issue8314App from './issue-8314-this-binding/App';
import Issue8411App from './issue-8411-render-logic/App';

export default function LocalTesting() {
    const [activeTest, setActiveTest] = useState('8411');

    return (
        <Container className="py-4">
        <Navbar bg="dark" variant="dark" expand="lg" className="rounded mb-4 px-3">
            <Navbar.Brand>React Docs: Local Testing</Navbar.Brand>
            <Nav className="ms-auto">
            <Nav.Link 
                active={activeTest === '8314'} 
                onClick={() => setActiveTest('8314')}
                style={{ cursor: 'pointer' }}
            >
                Issue #8414
            </Nav.Link>
            <Nav.Link 
                active={activeTest === '8411'} 
                onClick={() => setActiveTest('8411')}
                style={{ cursor: 'pointer' }}
            >
                Issue #8411
            </Nav.Link>
            </Nav>
        </Navbar>

        <Row className="justify-content-center">
            <Col md={10}>
            <div className="p-4 border rounded shadow-sm bg-light">
                {activeTest === '8314' ? <Issue8314App /> : <Issue8411App />}
            </div>
            </Col>
        </Row>

        <footer className="mt-5 text-center text-muted border-top pt-3">
            <small>COMP1101 Summative Assessment 2 | Durham University</small>
        </footer>
        </Container>
    );
}