import React from 'react';
import { Link } from "react-router-dom";

import { BsFillLaptopFill } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


import Benefits from '../Components/Benefits'
import Subscrib from '../Components/Subscrib'

import MacBookAir13M2 from '../Products/MacBookAir13M2'
import MacbookPro14 from '../Products/MacbookPro14'
import MacbookPro13 from '../Products/MacBookPro13'
import MacbookAir13M1 from '../Products/MacBookAir13M1'


function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>
      <Container>
            <div className='d-flex justify-content-between px-2 pt-4' style={{borderBottom: "1px solid black"}}>
                <h4 className='d-flex gap-2 align-items-center'>Apple</h4>
                <h5><Link className='text-decoration-none text-reset' to='/Apple'>See more</Link></h5>
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