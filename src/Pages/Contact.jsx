import React,  { useState, useRef } from 'react';


import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {

    const [show, setShow] = useState(false);
    const target = useRef(null);

  return (
    <div>
        <h1 className='d-flex justify-content-center align-items-center pt-5 mt-5'>Contact US</h1>

        <Container className='pt-5 mt-5'>
            <Card style={{border: 'none'}}>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </Form>
                <Button className='w-50 m w-100' ref={target} onClick={() => setShow(!show)}>Sent</Button>
                <Overlay target={target.current} show={show} placement="bottom">{(props) => (<Tooltip id="overlay-example" {...props}>Your message sent</Tooltip>)}</Overlay>      
            </Card>
        </Container>
    </div>
  );
}

export default Contact;