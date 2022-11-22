import React from 'react';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


import Apple from "../Images/Brands/apple.png"
import Vivo from "../Images/Brands/vivo.png"
import Realme from "../Images/Brands/realme.png"
import Xiaomi from "../Images/Brands/xiaomi.png"
import Skullcandy from "../Images/Brands/skullcandy.png"



function HomePageCarousel() {


  return (
    <div>
        <Container className='pb-5 pt-5'>
            <Row>
                <Col>
                    <Card className="">
                        <Link to='/Apple'><Card.Img src={Apple} alt="Card image" /></Link>
                    </Card>
                </Col>
                <Col>
                    <Card className="">
                    <Link to='/Vivo'><Card.Img src={Vivo} alt="Card image" /></Link>
                    </Card>
                </Col>
                <Col>
                    <Card className="">
                        <Link to='/Realme'><Card.Img src={Realme} alt="Card image" /></Link>
                    </Card>
                </Col>
                <Col>
                    <Card className="">
                        <Link to='/Xiaomi'><Card.Img src={Xiaomi} alt="Card image" /></Link>
                    </Card>
                </Col>
                <Col>
                    <Card className="">
                        <Link to='/Skullcandy'><Card.Img src={Skullcandy} alt="Card image" /></Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HomePageCarousel;