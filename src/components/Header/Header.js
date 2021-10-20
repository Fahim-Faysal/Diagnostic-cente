import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                        <Container>
                              <Navbar.Brand to="#home" className='text-info'>Faysal Diagnostic <br />Center</Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse>
                                    <Nav className="me-auto">
                                          <NavLink className='text-decoration-none mx-5' to="/home" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Home</NavLink>
                                          {/* <NavLink className='text-decoration-none mx-5' to="/service/:serviceId" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Services Detalis</NavLink> */}
                                          <NavLink className='text-decoration-none mx-5' to="/doctor" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Doctors</NavLink>
                                          <NavLink className='text-decoration-none mx-5' to="/About" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>About Us</NavLink>
                                    </Nav>
                                    {!user.email &&
                                          <Button onClick={handelLgoin} variant="outline-success">LogIn</Button>
                                    }
                                    {user?.email ?
                                          <Button onClick={googleSignOut} variant="outline-danger m-2">logOut</Button>
                                          :
                                          <Button onClick={handelSignUp} variant="outline-danger m-2">SignUp</Button>

                                    }
                                    {user.displayName ?
                                          <Navbar.Text className='text-warning'>
                                                Wellcome :  {user.displayName}
                                          </Navbar.Text>
                                          :
                                          <Navbar.Text className='text-warning'>
                                                Wellcome :  {user?.email?.substring(0, user.email.lastIndexOf("@"))}
                                          </Navbar.Text>}

                              </Navbar.Collapse>

                        </Container>
                  </Navbar>

            </div >
      );
};

export default Header;