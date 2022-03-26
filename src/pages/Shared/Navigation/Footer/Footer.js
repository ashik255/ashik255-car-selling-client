import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <Row style={{ backgroundColor: '#37474f' }} className='m-2 p-3 text-light'>
            <Col>
                <h4>NEED HELP</h4>
                <br />
                <h4><span><FiPhoneCall /></span>+088013054454544</h4>
                <br />
                <h4> <span> <AiOutlineMail /> </span> mai98.bd@gmail.com</h4>
                <br />
                <p><span className='m-3'><BsFacebook size='2.5em' /> </span>  <span className='m-5'> <FaTwitter size='2.5em' /> </span>  <span className='m-2'> <FaInstagram size='2.5em' /> </span> </p>

            </Col>
            <Col>
                <h4>Company</h4>
                <br />
                <h5>About Us</h5>
                <h5>Community Blog</h5>
                <h5>Rewards</h5>
                <h5>Work with Us</h5>
                <h5>Meet the Team</h5>
            </Col>
            <Col>
                <h4>SUPPORT</h4>
                <br />
                <h5>Account</h5>
                <h5>Legal</h5>
                <h5>Contact</h5>
                <h5>Affiliate Program</h5>
                <h5>Privacy Policy</h5>
            </Col>
        </Row>
    );
};

export default Footer;