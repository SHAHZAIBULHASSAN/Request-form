import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";
import Header from "./Header";
function NavMenu() {
  return (
    <Navbar className="colourTheme" expand="lg"  >
      
    <Container className="text-success p-1" >
    
      <Navbar.Brand href="#home" constant style={ {color:"white"}}> <h4>Transport Assistance</h4> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" constant style={ {color:"white"}}>Home </Nav.Link>
          <Nav.Link href="#link" constant style={ {color:"white"}}>Registration</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
      <Nav.Item className="ml-auto">
      <Nav.Link>
      <div style={{marginLeft:120 }}>
      <Header></Header> 

      </div>

      </Nav.Link>
    </Nav.Item>
    </Container>
  </Navbar>
  );
}

export default NavMenu;

