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
                        <h1 class="list-unstyled pt-5">Delivery Service</h1>
                        <p style={{color: "#FF5000"}}>Delivery Conditions</p>
                    <Card.Body>
                        <h5 className='pt-2'><RiArrowRightSFill color={"#FF5000"}/> When purchasing products on the SomeShop website, customers can use the delivery service.</h5>
                        <h5 className='pt-2'><RiArrowRightSFill color={"#FF5000"}/> Order delivery - within Tbilisi, the customer can use standard and express delivery services:</h5>
                        <ul>
                            <li>Fast delivery - the customer will receive the purchased product the same day, and the purchase made after 4:00 p.m., the next day. The cost of delivery is 5 GEL.</li>
                            <li>Standard Shipping - The customer will receive the purchased item for free in 2-4 working days.</li>
                            <li>Regional Delivery - Free delivery in 3-6 working days.</li>
                        </ul>
                        <h5 className='pt-2'><RiArrowRightSFill color={"#FF5000"}/> *The cost of standard delivery for orders up to 50 GEL is 5 GEL, and above 50 GEL, the standard delivery service is free.</h5>
                        <h5 className='pt-2'><RiArrowRightSFill color={"#FF5000"}/> Delivery is carried out by Georgian Post throughout Georgia and Tbilisi - Glovo, Unibox, Poste.</h5>
                        <h5 className='pt-2 pb-5'><RiArrowRightSFill color={"#FF5000"}/> Exceptions: *Courier service does not apply to special administrative units. Special administrative units are the administrative units of Mestia, Stepantsminda, Dusheti, Tianeti, Tsageri, Lentekhi. In such cases, the customer will order from the post office.</h5>
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
                            <TbTruckDelivery color={"#FF5000"} size={30}/>
                            <Card.Title style={{color: "#FF5000"}}>Delivery Service</Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col>
                    <Link  className='text-decoration-none text-reset' to='/GiftCards'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <BsGiftFill color={"#0D6EFD"} size={30}/>
                            <Card.Title>Gift Cards</Card.Title>
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