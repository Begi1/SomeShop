import React from 'react';

import { BsFillPhoneFill } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image2 from "../Images/Carousel/Image2.png"

import Subscrib from '../Components/Subscrib'
import VivoV23  from '../Products/VivoV23'
import VivoY21 from '../Products/VivoY21'
import VivoY33s from '../Products/VivoY33s'
import VivoY53s from '../Products/VivoY53s'




function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>

        <img
          className="d-block w-100 pb-4"
          src={Image2}
          alt='Apple-Banner'
        />

      <Container className='pb-5 mb-5'>
        <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
          <BsFillPhoneFill size={25}/>
          <h4 style={{margin: "0"}}>Phones</h4>
        </div>
        <Row xs={1} md={4} lg={4} className='pt-3 pb-5 mb-5'>
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

      <Subscrib />
    </div>
  );
}

export default Home;