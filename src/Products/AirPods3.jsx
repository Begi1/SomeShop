import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import { airPods3 }  from '../Data/dataApple'


function AirPods3() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


  return (
    <div>
      <Card  className="text-center" style={{border: "none", background: '#F5F5F5'}}>
        <Carousel interval='50000' variant = 'dark' activeIndex={index} onSelect={handleSelect} fade='true'>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={airPods3[0].img0}
                  alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={airPods3[0].img1}
                  alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={airPods3[0].img2}
                  alt="Third slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={airPods3[0].img3}
                  alt="Third slide"
                  />
              </Carousel.Item>
          </Carousel>


          <Card.Body >
            <Link to="/AirPods3">{airPods3[0].title}</Link>
            <Container>
              <Row className='pt-3 justify-content-md-center'>
                <Col md="auto">
                  <Card.Text>{airPods3[0].price + " ₾"}</Card.Text>
                </Col>
              </Row>
              <Row xs={1} md={2}>
                <Col className='w-100 pt-3'>
                  <Button className='w-100' variant="primary">Buy</Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
    </div>
  );
}

export default AirPods3;