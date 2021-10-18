import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = () => {

      const [services, setServices] = useState([])

      useEffect(() => {
            fetch('./service.json').then((res) => res.json()).then((data) => setServices(data));
      }, []);
      return (
            <div>
                  <h1 className='text-success mt-4'>Our Services</h1>
                  <Row xs={1} lg={3} md={2} className="g-5">
                        {
                              services.map(service => (
                                    <Col key={service.id}>
                                          <Card style={{ width: '25rem', height: '35rem' }}>
                                                <Card.Img variant="top" src={service.img} />
                                                <Card.Body>
                                                      <Card.Title>{service.name}</Card.Title>
                                                      <Card.Text>
                                                            {service.description}
                                                      </Card.Text>
                                                </Card.Body>
                                                <Button variant="danger">Detalils</Button>
                                          </Card>
                                    </Col>
                              ))
                        }

                  </Row>

            </div >
      );
};

export default Service;