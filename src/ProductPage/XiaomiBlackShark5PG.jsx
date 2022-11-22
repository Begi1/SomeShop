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

import XiaomiPocoX4Pro from '../Products/XiaomiPocoX4Pro'
import XiaomiRedmiNote11 from '../Products/XiaomiRedmiNote11'
import XiaomiRedmiNote11S from '../Products/XiaomiRedmiNote11S'

import { blackShark5PG, blackShark5PGMemory, blackShark5PGDetailed }  from '../Data/dataXiaomi'


function BlackShark5PG() {

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

    function ChangeMemory (WhichMemory) {
        if(WhichMemory === '128GB'){
          if(memory === 1){
            setMemory(memory - 1)
          }else if(memory === 2){
            setMemory(memory - 2)
          }
        }else if (WhichMemory === '256GB'){
          if(memory === 0){
            setMemory(memory + 1)
          }else if(memory === 2){
            setMemory(memory - 1)
          }
        }else if(WhichMemory === '512GB'){
          if(memory === 0){
            setMemory(memory + 2)
          }else if(memory === 1){
            setMemory(memory + 1)
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
                    src={blackShark5PG[color].img0}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={blackShark5PG[color].img1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={blackShark5PG[color].img2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <ListGroup variant="flush">
                    <ListGroup.Item className="fw-bold pt-3 pb-3">{blackShark5PG[color].title}</ListGroup.Item>
                    <ListGroup.Item className='d-flex gap-2 pt-3 pb-3'>Price: <div className="fw-bold">{blackShark5PGMemory[memory].discountPrice} ₾</div></ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex gap-1'>Color: <div className="fw-bold"> {blackShark5PG[color].color}</div></div>
                        <div className='d-flex gap-2 pt-2 pb-2'>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                <Tooltip id="button-tooltip">
                                    Black
                                </Tooltip>
                            }><Button onClick={() => ChangeColor('Black')} style={{height: "35px", width: "35px",borderRadius: "100%",border: "none", backgroundColor: "#1A1B1F"}}></Button></OverlayTrigger>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                <Tooltip id="button-tooltip">
                                    Gray
                                </Tooltip>
                            }><Button onClick={() => ChangeColor('Gray')} style={{height: "35px", width: "35px",borderRadius: "100%",border: "none", backgroundColor: "#405160"}}></Button></OverlayTrigger>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className='pt-2 pb-2'>
                    <div className='d-flex gap-1'>Memory: <div className="fw-bold">{blackShark5PGMemory[memory].memory}</div></div>
                            <div className='d-flex gap-2 pt-1 pb-2'>
                                <Button onClick={() => ChangeMemory('128GB')} variant="light">128GB</Button>
                                <Button onClick={() => ChangeMemory('256GB')} variant="light">256GB</Button>
                                <Button onClick={() => ChangeMemory('512GB')} variant="light">512GB</Button>
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
                    <td>{blackShark5PGDetailed[0].brand}</td>
                    </tr>
                    <tr>
                    <td>Release Date:</td>
                    <td>{blackShark5PGDetailed[0].releaseDate}</td>
                    </tr>
                    <tr>
                    <td>SIM Card:</td>
                    <td>{blackShark5PGDetailed[0].SIMCard}</td>
                    </tr>
                    <tr>
                    <td>Screen Size:</td>
                    <td>{blackShark5PGDetailed[0].screenSize}</td>
                    </tr>
                    <tr>
                    <td>Operating System:</td>
                    <td>{blackShark5PGDetailed[0].operatingSystem}</td>
                    </tr>
                    <tr>
                    <td>Chipset:</td>
                    <td>{blackShark5PGDetailed[0].chipset}</td>
                    </tr>
                    <tr>
                    <td>Internal Memory:</td>
                    <td>{blackShark5PGMemory[memory].memory}</td>
                    </tr>
                    <tr>
                    <td>RAM:</td>
                    <td>{blackShark5PGDetailed[0].RAM}</td>
                    </tr>
                    <tr>
                    <td>Selfie Camera:</td>
                    <td>{blackShark5PGDetailed[0].selfieCamera}</td>
                    </tr>
                    <tr>
                    <td>USB Port:</td>
                    <td>{blackShark5PGDetailed[0].USBPort}</td>
                    </tr>
                    <tr>
                    <td>Battery Size:</td>
                    <td>{blackShark5PGDetailed[0].batterySize}</td>
                    </tr>
                </tbody>
            </Table>
        </Row>

        <Row className='pt-5'>
            <Col>
                <XiaomiRedmiNote11S />
            </Col>
            <Col>
                <XiaomiPocoX4Pro />
            </Col>
            <Col>
                <XiaomiRedmiNote11 />
            </Col>
        </Row>
      </Container>

      <Benefits />
      <Subscrib />
    </div>
  );
}

export default BlackShark5PG;