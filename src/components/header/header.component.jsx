import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Header = () => (
  
  <Navbar bg="light" expand="lg">
  <Container >
    <Navbar.Brand href="#home">Tom &amp; Claire's Wedding</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Invitation</Nav.Link>
        <NavDropdown title="Information" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Venues</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Places to Stay</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Gift List</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Additional Information</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

);



export default Header;