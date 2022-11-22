import React, { useState, useRef } from 'react';

import { RiMailSendLine } from "react-icons/ri";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contant() {

    const [show, setShow] = useState(false);
    const target = useRef(null);

  return (
    <div style={{background: "#212529"}}>
        <Container className='d-flex justify-content-center align-items-start pt-5 pb-5'>
            <h1 className='d-flex align-items-center gap-3 w-100 p-0 m-0' style={{color: "#FFFFFF"}}><RiMailSendLine color={"#fff"}/>Subscribe to news</h1>
            <Form className='w-100 me-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
            <Button className='w-50 m' ref={target} onClick={() => setShow(!show)}>Subscrib</Button>
            <Overlay target={target.current} show={show} placement="right">{(props) => (<Tooltip id="overlay-example" {...props}>Subscribed</Tooltip>)}</Overlay>           
        </Container>

        <Container className='pb-5 w-100'>
            <Row>
                <Col>
                    <h3 style={{color: "#FFFFFF"}}>Adress: </h3>
                    <p style={{color: "#FFFFFF", margin: "0"}}>De Cuserstraat 89</p>
                    <p style={{color: "#FFFFFF", margin: "0"}}>1081 CN Amsterdam</p>
                    <p style={{color: "#FFFFFF", margin: "0"}}>The Netherlands</p>
                </Col>
                <Col>
                    <h3 style={{color: "#FFFFFF"}}>Tel:</h3>
                    <p style={{color: "#FFFFFF"}}>+31(0)20 – 6406363</p>
                </Col>
                <Col>
                    <h3 style={{color: "#FFFFFF"}}>Support:</h3>
                    <p style={{color: "#FFFFFF"}}>support@SomeShop.com</p>
                </Col>
                <Col>
                    <h3 style={{color: "#FFFFFF"}}>Corporate Sales:</h3>
                    <p style={{color: "#FFFFFF"}}>corporatesales@SomeShop.com</p>
                </Col>
            </Row>
        </Container>
        <Container className='d-flex justify-content-center align-items-start'><p style={{color: "#FFFFFF"}}>&copy; By Giorgi Begiashvili for Portfolio</p></Container>
    </div>
  );
}

export default Contant;