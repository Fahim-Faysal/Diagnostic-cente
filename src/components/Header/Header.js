import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Carousel, Container, Nav, Navbar, Placeholder } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Header = () => {
      const { user, googleSignOut } = useAuth()
      const history = useHistory()
      const handelLgoin = () => {
            history.push('/login')
      }
      const handelSignUp = () => {
            history.push('/signup')
      }
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
                                    <Button onClick={handelLgoin} variant="outline-success">LogIn</Button>
                                    {user?.email ?
                                          <Button onClick={googleSignOut} variant="outline-danger m-2">logOut</Button>
                                          :
                                          <Button onClick={handelSignUp} variant="outline-danger m-2">SignUp</Button>

                                    }
                                    <Navbar.Text>
                                          Signed in as: <a href="#login">{user.displayName}</a>
                                    </Navbar.Text>
                              </Navbar.Collapse>

                        </Container>
                  </Navbar>

            </div>
      );
};

export default Header;