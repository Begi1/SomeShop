import React from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Subscrib from '../Components/Subscrib'

import Iphone14  from '../Products/Iphone14'
import Iphone14Plus  from '../Products/Iphone14Plus'
import Iphone14Pro  from '../Products/Iphone14Pro'
import Iphone14ProMax  from '../Products/Iphone14ProMax'

import VivoV23  from '../Products/VivoV23'
import VivoY21 from '../Products/VivoY21'
import VivoY33s from '../Products/VivoY33s'
import VivoY53s from '../Products/VivoY53s'

import XiaomiBlackShark5  from '../Products/XiaomiBlackShark5'
import XiaomiPocoX4Pro from '../Products/XiaomiPocoX4Pro'
import XiaomiRedmiNote11 from '../Products/XiaomiRedmiNote11'
import XiaomiRedmiNote11S from '../Products/XiaomiRedmiNote11S'

import Realme9i from '../Products/Realme9i'
import RealmeC35 from '../Products/RealmeC35'
import Realme9ProPlus from '../Products/Realme9ProPlus'
import Realme9Pro from '../Products/Realme9Pro'

function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>
      <Container className='pt-4'>
        <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <h4>Apple</h4>
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
          <h4>Vivo</h4>
          <h5><Link className='text-decoration-none text-reset' to='/Vivo'>See more</Link></h5>
        </div>
        <Row xs={1} md={4} lg={4} className='pt-3'>
          <Col>
            <VivoV23 />
          </Col>
          <Col>
            <VivoY21 />
          </Col>
          <Col>
            <VivoY33s />
          </Col>
          <Col>
            <VivoY53s />
          </Col>
        </Row>
      </Container>

      <Container>
        <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <h4>Xiaomi</h4>
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

      <Container>
        <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <h4>Realme</h4>
          <h5><Link className='text-decoration-none text-reset' to='/Realme'>See more</Link></h5>
        </div>
        <Row xs={1} md={4} lg={4} className='pt-3 pb-5 mb-5'>
          <Col>
            <Realme9i />
          </Col>
          <Col>
            <RealmeC35 />
          </Col>
          <Col>
            <Realme9ProPlus />
          </Col>
          <Col>
            <Realme9Pro />
          </Col>
        </Row>
      </Container>

      <Subscrib />
    </div>
  );
}

export default Home;