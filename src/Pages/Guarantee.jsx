import React from 'react';
import { Link } from "react-router-dom";

import { IoShieldCheckmark } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BsGiftFill } from "react-icons/bs";

import { RiArrowRightSFill } from "react-icons/ri";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import Subscrib from '../Components/Subscrib'


function Home() {
  return (
    <div style={{background: '#F5F5F5'}}>

        <Container >
            <Row className='pt-5'>
                <Card style={{background: '#ebeced',}} className='px-5'>
                <ul>
                    <h4 class="list-unstyled pt-5">When purchasing all products in SomeShop, the user gets the best price and the best warranty conditions.</h4>
                    <li class="list-unstyled pt-2"><RiArrowRightSFill color={"#FF5000"}/> International warranty - all products purchased in our network will be serviced for one year by all authorized service centers anywhere in the world.</li>
                    
                    <li class="list-unstyled pt-2"><RiArrowRightSFill color={"#FF5000"}/> Standard 7-day replacement guarantee - if the product is found to have a manufacturing defect within 7 (seven) days of purchase (this does not mean visual 
                        damage and software defect), the user will contact the service center. After viewing/checking the smartphone, the service center will issue an act of replacing 
                        the defective product. (if the original appearance of the product is preserved without damage and the product is presented with a complete set and an undamaged 
                        box within the mentioned period). Based on the said act, the consumer receives a completely new product in return.</li>

                    <li class="list-unstyled pt-2"><RiArrowRightSFill color={"#FF5000"}/> Standard 1-year replacement warranty - if more than 7 days have passed since the purchase of the product and it is found to have a problem, the customer will 
                        contact the service center. After viewing/checking, the local service center sends the smartphone to an authorized Apple service center abroad. After inspecting and 
                        testing the product, the International Service Center will issue a relevant conclusion. If the product is found to have a manufacturing fault/defect, within one year 
                        it will be replaced with a new smartphone (completely new smartphone with box and identical IMEI code, + renewed 1-year international warranty), and if it is 
                        determined that the technical failure was caused by improper use of the device, the warranty is canceled.</li>
                    <li class="list-unstyled pt-2"><RiArrowRightSFill color={"#FF5000"}/> In the event of a warranty event, the product is transferred to the customer for temporary use.</li>
                    <li class="list-unstyled pt-2"><RiArrowRightSFill color={"#FF5000"}/> You cannot use the international guarantee if:</li>
                    <ul>
                        <li>The warranty period has expired.</li>
                        <li>Warranty card not presented/lost.</li>
                        <li>The data in the warranty card has been deleted, changed or modified.</li>
                        <li>The serial number/Ime code is not readable or removable in the warranty card or on the case of the item.</li>
                        <li>The device has a visual or mechanical defect/damage.</li>
                        <li>The seal or seal is damaged or loose.</li>
                        <li>The device was used for purposes other than its intended purpose.</li>
                        <li>The device is disassembled (opened) for arbitrary repair or for some other purpose.</li>
                        <li>The damage was caused by a computer virus or incompatible files.</li>
                        <li>The damage was caused by a foreign body or liquid entering the mechanism.</li>
                        <li>Damage is the result of electrical network failure (voltage fluctuation), mechanism dampness, corrosion, exposure to high or low temperature, violation of the rules and 
                            conditions of operation and storage, unqualified repair work carried out by incompetent persons.</li>
                    </ul>
                    <li class="list-unstyled pt-2"><RiArrowRightSFill color={"#FF5000"}/> 1+1 year extended warranty from Zoomer - After the international warranty expires, Zoomer offers an additional one-year warranty support. In the second year of the warranty 
                        period, the free service of the local service center is valid, which provides:</li>
                    <ul className='pb-5'>
                        <li>Product free software services.</li>
                        <li>Free repair of the product (it does not include the cost of the spare part. The cost of this is covered by the user).</li>
                    </ul>
                </ul>
                </Card>  
            </Row>
                          
        </Container>

       
        <Container className='mt-5 mb-5' fluid="sm">
            <Row>
                <Col>
                    <Link  className='text-decoration-none text-reset' to='/Guarantee'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <IoShieldCheckmark color={"#FF5000"} size={30}/>
                            <Card.Title style={{color: "#FF5000"}}>Guarantee</Card.Title>
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link  className='text-decoration-none text-reset' to='/Refound'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <FaExchangeAlt color={"#0D6EFD"} size={30}/>
                            <Card.Title>Refound</Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col>
                    <Link  className='text-decoration-none text-reset' to='/CorporateSales'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <MdOutlineCorporateFare color={"#0D6EFD"} size={30}/>
                            <Card.Title>Corporate Sales</Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col>
                    <Link  className='text-decoration-none text-reset' to='/DeliveryService'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <TbTruckDelivery color={"#0D6EFD"} size={30}/>
                            <Card.Title>Delivery Service</Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col>
                    <Link  className='text-decoration-none text-reset' to='/GiftCards'>
                        <Card className='d-flex justify-content-center align-items-center p-3 m-2 w-100'>
                            <BsGiftFill color={"#0D6EFD"} size={30}/>
                            <Card.Title>Gift Cards</Card.Title>
                        </Card>    
                    </Link>
                </Col>
            </Row>
        </Container>

        <Subscrib />
    </div>
  );
}

export default Home;