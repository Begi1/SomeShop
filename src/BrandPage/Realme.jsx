import React from 'react';

import { BsFillPhoneFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import RealmeBanner from '../Images/Realme/Realme.png'

import Subscrib from '../Components/Subscrib'

import Realme9i from '../Products/Realme9i'
import RealmeC35 from '../Products/RealmeC35'
import Realme9ProPlus from '../Products/Realme9ProPlus'
import Realme9Pro from '../Products/Realme9Pro'

import RealmeBudsAir2 from '../Products/RealmeBudsAir2'
import RealmeBudsAir3 from '../Products/RealmeBudsAir3'
import RealmeBudsQ2s from '../Products/RealmeBudsQ2s'
import RealmeTechLifeBudsT100 from '../Products/RealmeTechLifeBudsT100'

function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>

      <img
          className="d-block w-100 pb-4"
          src={RealmeBanner}
          alt='Apple-Banner'
        />


        <Container>
            <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
              <BsFillPhoneFill size={25}/>
              <h4 style={{margin: "0"}}>Phones</h4>
            </div>

            <Row xs={1} md={4} lg={4} className='pt-3'>
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

        <Container>
            <div className='d-flex align-items-center gap-2 pb-2 pt-4' style={{borderBottom: "1px solid black"}}>
              <FaHeadphones size={25}/>
              <h4 style={{margin: "0"}}>Headphones</h4>
            </div>

            <Row xs={1} md={4} lg={4} className='pt-3 pb-5 mb-5'>
            <Col>
                <RealmeBudsAir2 />
            </Col>
            <Col>
                <RealmeBudsAir3 />
            </Col>
            <Col>
                <RealmeBudsQ2s />
            </Col>
            <Col>
                <RealmeTechLifeBudsT100 />
            </Col>
            </Row>
        </Container>

      <Subscrib />
    </div>
  );
}

export default Home;