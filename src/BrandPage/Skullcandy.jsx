import React from 'react';


import { FaHeadphones } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from "../Images/Skullcandy/Skullcandy.png"

import Subscrib from '../Components/Subscrib'

import SkullcandyJIBWithMIC  from '../Products/SkullcandyJIBWithMIC'
import SkullcandyJIBWithoutMIC from '../Products/SkullcandyJIBWithoutMIC'
import SkullcandyCrusher from '../Products/SkullcandyCrusher'
import SkullcandyIndyFuelTrue  from '../Products/SkullcandyIndyFuelTrue'




function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>

        <img
          className="d-block w-100 pb-4"
          src={Image}
          alt='Apple-Banner'
        />

      <Container className='pb-5 mb-5'>
        <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <FaHeadphones size={25}/>
          <h4 style={{margin: "0"}}>Headphones</h4>
        </div>
        <Row xs={1} md={4} lg={4} className='pt-3 pb-5 mb-5'>
          <Col>
            <SkullcandyJIBWithMIC />
          </Col>
          <Col>
            <SkullcandyJIBWithoutMIC />
          </Col>
          <Col>
            <SkullcandyCrusher />
          </Col>
          <Col>
            <SkullcandyIndyFuelTrue />
          </Col>
        </Row>
      </Container>

      <Subscrib />
    </div>
  );
}

export default Home;