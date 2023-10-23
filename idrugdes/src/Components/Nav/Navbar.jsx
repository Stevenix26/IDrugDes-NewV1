import React from 'react';
import { shades } from '../../theme';
import { Button } from 'react-bootstrap'
import { Navbar, NavDropdown, Container, Nav, Collapse } from 'react-bootstrap'
import logo from '../../assets/logo.png';
import './Nav.css';
import {headerimg} from '../../assets/doctor1.png';

const Navbars = () => {
  return (
   <>
   <Navbar  bg='light' data-bs-theme="danger" expand="lg" >
        <Container>
        <Navbar.Brand>
          <img src={logo} title='logo/'/> 
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto"  variant="links">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bookings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown title="Consultant" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">checkOut</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#link">Contant Us</Nav.Link>
            <Nav.Link href="#link">search</Nav.Link>
            <Nav.Link href="#link">(+234) 810 518 7774</Nav.Link>
            <Nav.Link href="#link">
             <button>
             contact us <span><b>></b></span>
             </button>
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
   
   </>
  )
}

export default Navbars;
