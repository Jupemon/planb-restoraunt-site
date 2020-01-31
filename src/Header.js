import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap'
class Header extends Component {
    state = {  }
    render() { 
        return ( <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Navbar.Brand href="#title">Plan-B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Yhteystiedot</Nav.Link>
            <Nav.Link href="https://www.facebook.com/pages/category/Pizza-Place/Plan-B-Pizzeria-restaurant-583054232216642/">Facebook</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> );
    }
}
 
export default Header;