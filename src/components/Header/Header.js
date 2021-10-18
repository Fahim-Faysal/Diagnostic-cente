import React from 'react';
import { Button, Carousel, Container, Nav, Navbar, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand href="#home" className='text-info'>Faysal Diagnostic <br />Center</Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse>
                                    <Nav className="me-auto">
                                          <Nav.Link href="/home">Home</Nav.Link>
                                          <Nav.Link href="/service">Services</Nav.Link>
                                          <Nav.Link href="/doctors">Doctors</Nav.Link>
                                          <Nav.Link href="/About">About Us</Nav.Link>
                                    </Nav>
                                    <Button variant="outline-success">LogIn</Button>
                                    <Button variant="outline-danger m-2">LogOut</Button>
                                    <Navbar.Text>
                                          Signed in as: <a href="#login">Mark Otto</a>
                                    </Navbar.Text>
                              </Navbar.Collapse>

                        </Container>
                  </Navbar>

            </div>
      );
};

export default Header;