import React from 'react';
import { Link } from "react-router-dom";

import { IoShieldCheckmark } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BsGiftFill } from "react-icons/bs";

import { RiArrowRightSFill } from "react-icons/ri";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import Subscrib from '../Components/Subscrib'


function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>

        <Container >
            <Row className='pt-5'>
                <Card style={{background: '#ebeced'}} className='justify-content-center align-items-center px-5'>
                        <h1 class="list-unstyled pt-5">Gift Card</h1>
                        <p style={{color: "#FF5000"}}>Gift Card Conditions</p>
                    <Card.Body>
                        <h5 className='pt-2'><RiArrowRightSFill color={"#FF5000"}/> To purchase a gift card, you must email us: giftcard@SomeShop.com</h5>
                        <h5 className='pt-2'><RiArrowRightSFill color={"#FF5000"}/> Gift card will be made according to your wishes.</h5>
                    </Card.Body>
                </Card>  
            </Row>
                          
        </Container>

       
        <Container className='mt-5 mb-5' fluid="sm">
            <Row>
                <Col>
                    <Link  className='text-decoration-none text-reset' to='/Guarantee'>
                    <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                        <IoShieldCheckmark color={"#0D6EFD"} size={30}/>
                        <Card.Title style={{color: "#0D6EFD"}}>Guarantee</Card.Title>
                    </Card>
                    </Link>
                </Col>
                <Col>
                    <Link  className='text-decoration-none text-reset' to='/Refound'>
                    <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                        <FaExchangeAlt color={"#0D6EFD"} size={30}/>
                        <Card.Title>Refound</Card.Title>
                    </Card>
                    </Link>
                </Col>

                <Col>
                    <Link  className='text-decoration-none text-reset' to='/CorporateSales'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <MdOutlineCorporateFare color={"#0D6EFD"} size={30}/>
                            <Card.Title >Corporate Sales</Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col>
                    <Link  className='text-decoration-none text-reset' to='/DeliveryService'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <TbTruckDelivery color={"#0D6EFD"} size={30}/>
                            <Card.Title>Delivery Service</Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col>
                    <Link  className='text-decoration-none text-reset' to='/GiftCards'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <BsGiftFill color={"#FF5000"} size={30}/>
                            <Card.Title style={{color: "#FF5000"}}>Gift Cards</Card.Title>
                        </Card>  
                    </Link>  
                </Col>
            </Row>
        </Container>

        <Subscrib />
    </div>
  );
}

export default Home;