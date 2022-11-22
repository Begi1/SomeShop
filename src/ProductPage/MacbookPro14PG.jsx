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

import MacBookAir13M2 from '../Products/MacBookAir13M2'
import MacBookAir13M1 from '../Products/MacBookAir13M1'
import MacBookPro13 from '../Products/MacBookPro13'

import { macbookPro14PG, macBooAir13M2PGDetailed }  from '../Data/dataApple'



function MacBookPro14PG() {

    const [index, setIndex] = useState(0);
    const [color, setColor] = useState(0);

    function ChangeColor (WhichColor) {
        if(WhichColor === 'Silver'){
          if(color === 1){
            setColor(color - 1)
          }else if(color === 2){
            setColor(color - 2)
          }else if(color === 3){
            setColor(color - 3)
          }
        }else if (WhichColor === 'Space Gray'){
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
                    src={macbookPro14PG[color].img0}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={macbookPro14PG[color].img1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={macbookPro14PG[color].img2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <ListGroup variant="flush">
                    <ListGroup.Item className="fw-bold pt-3 pb-3">{macbookPro14PG[color].title}</ListGroup.Item>
                    <ListGroup.Item className='d-flex gap-2 pt-3 pb-3'>Price: <div className="fw-bold">{macbookPro14PG[0].discountPrice} ₾</div></ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex gap-1'>Color: <div className="fw-bold">{macbookPro14PG[color].color}</div></div>
                        <div className='d-flex gap-2 pt-2 pb-2'>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                <Tooltip id="button-tooltip">
                                    Silver
                                </Tooltip>
                            }><Button onClick={() => ChangeColor('Silver')} style={{height: "35px", width: "35px",borderRadius: "100%",border: "none", backgroundColor: "#E7E8EA"}}></Button></OverlayTrigger>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                <Tooltip id="button-tooltip">
                                    Space Gray
                                </Tooltip>
                            }><Button onClick={() => ChangeColor('Space Gray')} style={{height: "35px", width: "35px",borderRadius: "100%",border: "none", backgroundColor: "#BDBEC2"}}></Button></OverlayTrigger>
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
                    <td>{macBooAir13M2PGDetailed[0].brand}</td>
                    </tr>
                    <tr>
                    <td>Release Date:</td>
                    <td>{macBooAir13M2PGDetailed[0].releaseDate}</td>
                    </tr>
                    <tr>
                    <td>Screen Size:</td>
                    <td>{macBooAir13M2PGDetailed[0].screenSize}</td>
                    </tr>
                    <tr>
                    <td>Display:</td>
                    <td>{macBooAir13M2PGDetailed[0].display}</td>
                    </tr>
                    <tr>
                    <td>Chipset:</td>
                    <td>{macBooAir13M2PGDetailed[0].chipset}</td>
                    </tr>
                    <tr>
                    <td>Memory:</td>
                    <td>{macBooAir13M2PGDetailed[0].memory}</td>
                    </tr>
                    <tr>
                    <td>Operating System:</td>
                    <td>{macBooAir13M2PGDetailed[0].operatingSystem}</td>
                    </tr>
                    <tr>
                    <td>Battery:</td>
                    <td>{macBooAir13M2PGDetailed[0].battery}</td>
                    </tr>
                </tbody>
            </Table>
        </Row>

        <Row className='pt-5'>
            <Col>
                <MacBookAir13M2 />
            </Col>
            <Col>
                <MacBookAir13M1 />
            </Col>
            <Col>
                <MacBookPro13 />
            </Col>
        </Row>
      </Container>

      <Benefits />
      <Subscrib />
    </div>
  );
}

export default MacBookPro14PG;