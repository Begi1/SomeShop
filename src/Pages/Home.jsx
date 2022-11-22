import React from 'react';
import { Link } from "react-router-dom";

import { DiApple } from "react-icons/di";
import { SiXiaomi } from "react-icons/si";
import { TbShoppingCartDiscount } from "react-icons/tb";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageCarousel from '../Components/HomePageCarousel.jsx'
import BrandCarousel from '../Components/BrandCarousel'
import Benefits from '../Components/Benefits'
import Subscrib from '../Components/Subscrib'

import Iphone14  from '../Products/Iphone14'
import Iphone14Plus  from '../Products/Iphone14Plus'
import Iphone14Pro  from '../Products/Iphone14Pro'
import Iphone14ProMax  from '../Products/Iphone14ProMax'

import XiaomiBlackShark5  from '../Products/XiaomiBlackShark5'
import XiaomiPocoX4Pro from '../Products/XiaomiPocoX4Pro'
import XiaomiRedmiNote11 from '../Products/XiaomiRedmiNote11'
import XiaomiRedmiNote11S from '../Products/XiaomiRedmiNote11S'

// Discount
import AirPodsPro2  from '../Products/AirPodsPro2'
import BlackShark5  from '../Products/XiaomiBlackShark5'
import SkullcandyCrusher  from '../Products/SkullcandyCrusher'
import XiaomiBlackSharkLuciferT10  from '../Products/XiaomiBlackSharkLuciferT10'
import VivoV23  from '../Products/VivoV23'
import RealmeTechLifeBudsT100  from '../Products/RealmeTechLifeBudsT100'
import MacbookPro14  from '../Products/MacbookPro14'

function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>
      <HomePageCarousel />

      <Container className='pb-5 '>
        <div className='d-flex justify-content-between px-2 pt-4' >
          <h4 className='d-flex gap-2 align-items-center'><TbShoppingCartDiscount size={"25px"}/>Discount</h4>
        </div> 
        <Row xs={1} md={4} lg={4} className='pt-3'>
          <Col>
            <Iphone14Pro />
          </Col>
          <Col>
            <AirPodsPro2 />
          </Col>
          <Col>
            <BlackShark5 />
          </Col>
          <Col>
            <SkullcandyCrusher />
          </Col>
        </Row>

        <Row xs={1} md={4} lg={4} className='pt-3'>
          <Col>
            <XiaomiBlackSharkLuciferT10 />
          </Col>
          <Col>
            <VivoV23 />
          </Col>
          <Col>
            <RealmeTechLifeBudsT100 />
          </Col>
          <Col>
            <MacbookPro14 />
          </Col>
        </Row>
      </Container>

      <BrandCarousel />

      <Container className='pt-2'>
        <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <h4 className='d-flex gap-2 align-items-center'><DiApple />Apple</h4>
          <h5><Link className='text-decoration-none text-reset' to='/Apple'>See more</Link></h5>
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
        <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <h4 className='d-flex gap-2 align-items-center'><SiXiaomi />Xiaomi</h4>
          <h5><Link className='text-decoration-none text-reset' to='/Xiaomi'>See more</Link></h5>
        </div> 
        <Row xs={1} md={4} lg={4} className='pt-3'>
          <Col>
            <XiaomiBlackShark5 />
          </Col>
          <Col>
            <XiaomiPocoX4Pro />
          </Col>
          <Col>
            <XiaomiRedmiNote11 />
          </Col>
          <Col>
            <XiaomiRedmiNote11S />
          </Col>
        </Row>
      </Container>

      <Benefits />
      <Subscrib />
    </div>
  );
}

export default Home;