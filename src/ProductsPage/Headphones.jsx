import React from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Benefits from '../Components/Benefits'
import Subscrib from '../Components/Subscrib'

import AirPodsPro2  from '../Products/AirPodsPro2'
import AirPodsPro  from '../Products/AirPodsPro'
import AirPods3  from '../Products/AirPods3'
import AirPods2  from '../Products/AirPods2'

import SkullcandyJIBWithMIC  from '../Products/SkullcandyJIBWithMIC'
import SkullcandyJIBWithoutMIC  from '../Products/SkullcandyJIBWithoutMIC'
import SkullcandyCrusher from '../Products/SkullcandyCrusher'
import SkullcandyIndyFuelTrue  from '../Products/SkullcandyIndyFuelTrue'

import XiaomiBlackSharkJoyBuds  from '../Products/XiaomiBlackSharkJoyBuds'
import XiaomiBlackSharkLuciferT10  from '../Products/XiaomiBlackSharkLuciferT10'
import XiaomiRedmiBuds3 from '../Products/XiaomiRedmiBuds3'
import XiaomiRedmiBudsPro3 from '../Products/XiaomiRedmiBudsPro3'

import RealmeBudsAir2 from '../Products/RealmeBudsAir2'
import RealmeBudsAir3 from '../Products/RealmeBudsAir3'
import RealmeBudsQ2s from '../Products/RealmeBudsQ2s'
import RealmeTechLifeBudsT100 from '../Products/RealmeTechLifeBudsT100'


function Headphones() {
  return (
    <div style={{background: '#F5F5F5'}}>
        <Container>
            <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
                <h4 className='d-flex gap-2 align-items-center'>Apple</h4>
                <h5><Link className='text-decoration-none text-reset' to='/Apple'>See more</Link></h5>
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
            <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
                <h4 className='d-flex gap-2 align-items-center'>Skullcandy</h4>
                <h5><Link className='text-decoration-none text-reset' to='/Skullcandy'>See more</Link></h5>
            </div> 
            <Row xs={1} md={4} lg={4} className='pt-3'>
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

        <Container>
            <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
                <h4 className='d-flex gap-2 align-items-center'>Xiaomi</h4>
                <h5><Link className='text-decoration-none text-reset' to='/Xiaomi'>See more</Link></h5>
            </div> 
            <Row xs={1} md={4} lg={4} className='pt-3'>
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

        <Container>
            <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
                <h4 className='d-flex gap-2 align-items-center'>Realme</h4>
                <h5><Link className='text-decoration-none text-reset' to='/Realme'>See more</Link></h5>
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

export default Headphones;