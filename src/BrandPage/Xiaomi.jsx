import React from 'react';

import { BsFillPhoneFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import XiaomiBanner from '../Images/Xiaomi/Xiaomi.png'

import Subscrib from '../Components/Subscrib'

import XiaomiBlackShark5  from '../Products/XiaomiBlackShark5'
import XiaomiPocoX4Pro from '../Products/XiaomiPocoX4Pro'
import XiaomiRedmiNote11 from '../Products/XiaomiRedmiNote11'
import XiaomiRedmiNote11S from '../Products/XiaomiRedmiNote11S'

import XiaomiBlackSharkJoyBuds  from '../Products/XiaomiBlackSharkJoyBuds'
import XiaomiBlackSharkLuciferT10  from '../Products/XiaomiBlackSharkLuciferT10'
import XiaomiRedmiBuds3 from '../Products/XiaomiRedmiBuds3'
import XiaomiRedmiBudsPro3 from '../Products/XiaomiRedmiBudsPro3'



function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>

      <img
          className="d-block w-100 pb-4"
          src={XiaomiBanner}
          alt='Apple-Banner'
        />


      <Container>
        <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <BsFillPhoneFill size={25}/>
          <h4 style={{margin: "0"}}>Phones</h4>
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
            <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
              <FaHeadphones size={25}/>
              <h4 style={{margin: "0"}}>Headphones</h4>
            </div>
            <Row xs={1} md={4} lg={4} className='pt-3 pb-5 mb-5'>
            <Col>
                <XiaomiBlackSharkJoyBuds />
            </Col>
            <Col>
                <XiaomiBlackSharkLuciferT10 />
            </Col>
            <Col>
                <XiaomiRedmiBuds3 />
            </Col>
            <Col>
                <XiaomiRedmiBudsPro3 />
            </Col>
            </Row>
      </Container>

      <Subscrib />
    </div>
  );
}

export default Home;