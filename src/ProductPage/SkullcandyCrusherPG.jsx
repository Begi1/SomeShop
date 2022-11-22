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

import SkullcandyJIBWithMIC  from '../Products/SkullcandyJIBWithMIC'
import SkullcandyJIBWithoutMIC from '../Products/SkullcandyJIBWithoutMIC'
import SkullcandyIndyFuelTrue from '../Products/SkullcandyIndyFuelTrue'

import { skullcandyCrusherPG, skullcandyJIBWithMICPGDetailed }  from '../Data/dataSkullcandy'



function Iphone14PG() {

    const [index, setIndex] = useState(0);
    const [color, setColor] = useState(0);
    const [memory, setMemory] = useState(0);

    function ChangeColor (WhichColor) {
        if(WhichColor === 'Black'){
          if(color === 1){
            setColor(color - 1)
          }else if(color === 2){
            setColor(color - 2)
          }else if(color === 3){
            setColor(color - 3)
          }
        }else if (WhichColor === 'Gray'){
          if(color === 0){
            setColor(color + 1)
          }else if(color === 2){
            setColor(color - 1)
          }else if(color === 3){
            setColor(color - 2)
          }
        }
    } 


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
                    src={skullcandyCrusherPG[color].img0}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={skullcandyCrusherPG[color].img1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={skullcandyCrusherPG[color].img2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <ListGroup variant="flush">
                    <ListGroup.Item className="fw-bold pt-3 pb-3">{skullcandyCrusherPG[color].title}</ListGroup.Item>
                    <ListGroup.Item className='d-flex gap-2 pt-3 pb-3'>Price: <div className="fw-bold">{skullcandyCrusherPG[0].discountPrice} ₾</div></ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex gap-1'>Color: <div className="fw-bold"> {skullcandyCrusherPG[color].color}</div></div>
                        <div className='d-flex gap-2 pt-2 pb-2'>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                <Tooltip id="button-tooltip">
                                    Black
                                </Tooltip>
                            }><Button onClick={() => ChangeColor('Black')} style={{height: "35px", width: "35px",borderRadius: "100%",border: "none", backgroundColor: "#1B1B1B"}}></Button></OverlayTrigger>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                <Tooltip id="button-tooltip">
                                    Gray
                                </Tooltip>
                            }><Button onClick={() => ChangeColor('Gray')} style={{height: "35px", width: "35px",borderRadius: "100%",border: "none", backgroundColor: "#A9AAA7"}}></Button></OverlayTrigger>
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
                    <td>{skullcandyJIBWithMICPGDetailed[0].brand}</td>
                    </tr>
                    <tr>
                    <td>Model:</td>
                    <td>{skullcandyJIBWithMICPGDetailed[0].Model}</td>
                    </tr>
                    <tr>
                    <td>Bluetooth:</td>
                    <td>{skullcandyJIBWithMICPGDetailed[0].driver}</td>
                    </tr>
                    <tr>
                    <td>Communication Distance:</td>
                    <td>{skullcandyJIBWithMICPGDetailed[0].frequency}</td>
                    </tr>
                </tbody>
            </Table>
        </Row>

        <Row className='pt-5'>
            <Col>
                <SkullcandyIndyFuelTrue />
            </Col>
            <Col>
                <SkullcandyJIBWithoutMIC />
            </Col>
            <Col>
                <SkullcandyJIBWithMIC />
            </Col>
        </Row>
      </Container>

      <Benefits />
      <Subscrib />
    </div>
  );
}

export default Iphone14PG;