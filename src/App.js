import React from 'react';
import './App.css';
import {Container, Row, Col} from "reactstrap"

function App() {
  return (
   <Container>
     <Row>
       <Col><h3><b>Students</b></h3></Col>

       <Col><h3><b>Projects</b></h3></Col>
     </Row>
   </Container>
  );
}

export default App;
