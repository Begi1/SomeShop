import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { RiMapPin2Fill } from "react-icons/ri";

import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Benefits from '../Components/Benefits'
import Subscrib from '../Components/Subscrib'

import AirPodsPro from '../Products/AirPodsPro'
import AirPods3 from '../Products/AirPods3'
import AirPods2 from '../Products/AirPods2'

import { airPodsPro2, airPodsPro2PGDetailed }  from '../Data/dataApple'



function Iphone14PG() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const cardstyle = {
        width: '18rem',
        margin: '20px',
    };


  return (
    <div style={{background: '#F5F5F5'}}>


      <Container className='pt-5 pb-5' fluid='md'>
        <Row>
            <Col sm={4}>
                <Carousel interval='10000' variant = 'dark' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={airPodsPro2[0].img0}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={airPodsPro2[0].img1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={airPodsPro2[0].img2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={airPodsPro2[0].img3}
                  alt="Third slide"
                  />
              </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <ListGroup variant="flush">
                    <ListGroup.Item className="fw-bold pt-3 pb-3">{airPodsPro2[0].title}</ListGroup.Item>
                    <ListGroup.Item className='d-flex gap-2 pt-3 pb-3'>Price: <div className="fw-bold">{airPodsPro2[0].discountPrice} ₾</div></ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex gap-1'>Color: <div className="fw-bold"> {airPodsPro2[0].color}</div></div>
                        <div className='d-flex gap-2 pt-2 pb-2'>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                <Tooltip id="button-tooltip">
                                    White
                                </Tooltip>
                            }><Button style={{height: "35px", width: "35px",borderRadius: "100%",border: "none", backgroundColor: "#F5F5F5"}}></Button></OverlayTrigger>

                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className='pt-3 pb-3'><Button className='px-5'>Buy</Button></ListGroup.Item>
                    <ListGroup.Item className='text-decoration-none text-reset d-flex gap-2 align-items-center pt-3 pb-2'><RiMapPin2Fill color="green"/>In Stock</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>

        <Row className='pt-5'>
            <Table striped>
                <thead>
                    <tr>
                    <th>Characteristics</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Brand:</td>
                    <td>{airPodsPro2PGDetailed[0].brand}</td>
                    </tr>
                    <tr>
                    <td>Model:</td>
                    <td>{airPodsPro2PGDetailed[0].Model}</td>
                    </tr>
                    <tr>
                    <td>Bluetooth:</td>
                    <td>{airPodsPro2PGDetailed[0].bluetooth}</td>
                    </tr>
                    <tr>
                    <td>Communication Distance:</td>
                    <td>{airPodsPro2PGDetailed[0].communicationDistance}</td>
                    </tr>
                    <tr>
                    <td>Protection:</td>
                    <td>{airPodsPro2PGDetailed[0].protection}</td>
                    </tr>
                    <tr>
                    <td>Chipset:</td>
                    <td>{airPodsPro2PGDetailed[0].chipset}</td>
                    </tr>
                    <tr>
                    <td>Working Time:</td>
                    <td>{airPodsPro2PGDetailed[0].workingtime}</td>
                    </tr>
                    <tr>
                    <td>Working Time With Case:</td>
                    <td>{airPodsPro2PGDetailed[0].workingTimeWithCase}</td>
                    </tr>
                </tbody>
            </Table>
        </Row>

        <Row className='pt-5'>
            <Col>
                <AirPodsPro />
            </Col>
            <Col>
                <AirPods2 />
            </Col>
            <Col>
                <AirPods3 />
            </Col>
        </Row>
      </Container>

      <Benefits />
      <Subscrib />
    </div>
  );
}

export default Iphone14PG;