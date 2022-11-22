import React from 'react';
import { Link } from "react-router-dom";

import { IoShieldCheckmark } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BsGiftFill } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Benefits() {


  return (
    <div style={{background: '#F5F5F5', padding: '5px'}}>
      <Container className='mt-5 mb-5' fluid="sm">
        <Row>
          <Col>
            <Link  className='text-decoration-none text-reset' to='./Guarantee'>
              <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                  <IoShieldCheckmark color={"#0D6EFD"} size={30}/>
                  <Card.Title>Guarantee</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link  className='text-decoration-none text-reset' to='./Refound'>
              <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                  <FaExchangeAlt color={"#0D6EFD"} size={30}/>
                  <Card.Title>Refound</Card.Title>
              </Card>
            </Link>
          </Col>

          <Col>
            <Link  className='text-decoration-none text-reset' to='./CorporateSales'>
              <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                  <MdOutlineCorporateFare color={"#0D6EFD"} size={30}/>
                  <Card.Title>Corporate Sales</Card.Title>
              </Card>
            </Link>
          </Col>

          <Col>
            <Link  className='text-decoration-none text-reset' to='./DeliveryService'>
              <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                  <TbTruckDelivery color={"#0D6EFD"} size={30}/>
                  <Card.Title>Delivery service</Card.Title>
              </Card>
            </Link>
          </Col>

          <Col>
            <Link  className='text-decoration-none text-reset' to='./GiftCards'>
              <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                  <BsGiftFill color={"#0D6EFD"} size={30}/>
                  <Card.Title>Gift Cards</Card.Title>
              </Card>   
            </Link> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefits;