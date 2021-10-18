import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const Doctors = () => {
      const [doctors, setDoctors] = useState([])
      useEffect(() => {
            fetch('./doctor.json')
                  .then(res => res.json())
                  .then(data => setDoctors(data))
      }, [])
      return (
            <div>
                  <h1 className='text-success m-5'>Our Honorable Doctors</h1>
                  <Row xs={1} lg={3} md={2} className="g-4 mx-5">
                        {
                              doctors.map(doctor => (
                                    <Col key={doctor.name} className='Container'>
                                          <Card style={{ width: '25rem', height: '35rem' }}>
                                                <Card.Img variant="top" src={doctor.img} />
                                                <Card.Body>
                                                      <Card.Title>{doctor.name}</Card.Title>
                                                      <Card.Text>
                                                            {doctor.description}
                                                      </Card.Text>
                                                      <Card.Text>
                                                            Fees : $ {doctor.Fees}
                                                      </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                              ))
                        }
                  </Row>
            </div>
      );
};

export default Doctors;