import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UserProfile = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={12} className="bg-primary text-white p-3">
          <h1>Hola Eduardo!</h1>
          <p>Queremos mostrarte el estatus de tus documentos!</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={2} className="bg-secondary text-white p-0">
          <nav className="nav flex-column p-3">
            <a className="nav-link text-white" href="#">Dashboard</a>
            <a className="nav-link text-white" href="#">User Profile</a>
            <a className="nav-link text-white" href="#">Edit User</a>
            <a className="nav-link text-white" href="#">User List</a>
            <a className="nav-link text-white" href="#">Utilities</a>
          </nav>
        </Col>
        <Col md={10} className="d-flex justify-content-center align-items-center">
          <Card style={{ width: '18rem', backgroundColor: '#5a2d54', color: 'white' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Eduardo Cortés</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020301327</Card.Subtitle>
              <Card.Text>
                <p><strong>ESIME, ZACATENCO</strong></p>
                <p>Carrera: ISC 2020</p>
                <p>Fecha de nacimiento: 16/09/1999</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
