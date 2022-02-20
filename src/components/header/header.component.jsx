import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './header.styles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from '../../pages/homepage/homepage.component';
import Invitation from '../../pages/invitation/invitation.component';
import Venues from '../../pages/venues/venues.component';
import PlacesToStay from '../../pages/places-to-stay/places-to-stay.component';


export default class Header extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">Tom &amp; Claire's Wedding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/invitation"}>Invitation</Nav.Link>
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/venues"}>Venues</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/places-to-stay"}>Places to Stay</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gift List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Everything Else</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div>
      <Routes>
      
      <Route path="/invitation" element={<Invitation/>}>
        
      </Route>
      <Route path="/venues" element={<Venues/>}>
        
      </Route>
      <Route path="/places-to-stay" element={<PlacesToStay/>}>
        
      </Route>
      <Route path="/" element={<HomePage />}>
        
      </Route>
    </Routes>
      </div>
      </Router>
      
    )
  }
} 
  
