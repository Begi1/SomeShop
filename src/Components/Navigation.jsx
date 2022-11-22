import React from 'react';
import { Link } from "react-router-dom";

import { BsFillPhoneFill } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { IoWatchSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navigation() {
  return (
    <Navbar className='p-3 px-5' bg="dark" variant="dark" expand="lg">
      <Container fluid> 
        <Navbar.Brand href="#"><Link className='text-decoration-none text-reset' to='/'>SomeShop.com</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" ><Link className='text-decoration-none text-reset' to="/">Home</Link></Nav.Link>
            <NavDropdown title="Products" id="nav-dropdown" className='background'>
              <NavDropdown.Item className=''><Link className='text-decoration-none text-reset d-flex gap-2 align-items-center' to="/Phones"><BsFillPhoneFill />Phone</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link className='text-decoration-none text-reset d-flex gap-2 align-items-center' to="/Laptops"><BsFillLaptopFill />Laptop</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link className='text-decoration-none text-reset d-flex gap-2 align-items-center' to="/Headphones"><FaHeadphones />Headphones</Link></NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title="Brands" id="nav-dropdown">
              <NavDropdown.Item><Link className='text-decoration-none text-reset' to="/Apple">Apple</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='text-decoration-none text-reset' to="/Xiaomi">Xiaomi</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='text-decoration-none text-reset' to="/Vivo">Vivo</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='text-decoration-none text-reset' to="/Realme">Realme</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='text-decoration-none text-reset' to="/Skullcandy">Skullcandy</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link className='text-decoration-none text-reset' to="/Contact">Contact</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;