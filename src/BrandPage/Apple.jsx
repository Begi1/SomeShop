import React from 'react';

import { BsFillPhoneFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { BsFillLaptopFill } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppleBanner from '../Images/Apple/AppleBanner.png'

import Subscrib from '../Components/Subscrib'

import Iphone14  from '../Products/Iphone14'
import Iphone14Plus  from '../Products/Iphone14Plus'
import Iphone14Pro  from '../Products/Iphone14Pro'
import Iphone14ProMax  from '../Products/Iphone14ProMax'

import AirPodsPro2  from '../Products/AirPodsPro2'
import AirPodsPro  from '../Products/AirPodsPro'
import AirPods3  from '../Products/AirPods3'
import AirPods2  from '../Products/AirPods2'

import MacBookAir13M2 from '../Products/MacBookAir13M2'
import MacbookPro14 from '../Products/MacbookPro14'
import MacbookPro13 from '../Products/MacBookPro13'
import MacbookAir13M1 from '../Products/MacBookAir13M1'


function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>

      <img
          className="d-block w-100 pb-4"
          src={AppleBanner}
          alt='Apple-Banner'
        />


      <Container>
        <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <BsFillPhoneFill size={25}/>
          <h4 style={{margin: "0"}}>Phones</h4>
        </div>
  
        <Row xs={1} md={4} lg={4} className='pt-3'>
          <Col>
            <Iphone14 />
          </Col>
          <Col>
            <Iphone14Plus />
          </Col>
          <Col>
            <Iphone14Pro />
          </Col>
          <Col>
            <Iphone14ProMax />
          </Col>
        </Row>
      </Container>

      <Container>
        <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <FaHeadphones size={25}/>
          <h4 style={{margin: "0"}}>Headphones</h4>
        </div>

        <Row xs={1} md={4} lg={4} className='pt-3'>
          <Col>
            <AirPodsPro2 />
          </Col>
          <Col>
            <AirPodsPro />
          </Col>
          <Col>
            <AirPods3 />
          </Col>
          <Col>
            <AirPods2 />
          </Col>
        </Row>
      </Container>

      <Container>
        <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <BsFillLaptopFill size={25}/>
          <h4 style={{margin: "0"}}>Laptops</h4>
        </div>

        <Row xs={1} md={4} lg={4} className='pt-3 pb-5 mb-5'>
          <Col>
            <MacBookAir13M2 />
          </Col>
          <Col>
            <MacbookPro14 />
          </Col>
          <Col>
            <MacbookPro13 />
          </Col>
          <Col>
            <MacbookAir13M1 />
          </Col>
        </Row>
      </Container>

      <Subscrib />
    </div>
  );
}

export default Home;