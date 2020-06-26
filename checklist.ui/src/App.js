import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainOptions from './components/mainOptions'

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>Shareable Checklists</Col>
        </Row>
        <Row>
          <Col><MainOptions /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
