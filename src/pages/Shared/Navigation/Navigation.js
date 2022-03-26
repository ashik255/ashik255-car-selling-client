import React from 'react';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    const {user,logout}= useAuth();
    return (
        <>
            <Navbar className='text-white' collapseOnSelect expand="lg"  bg="dark" variant="dark" sticky="top">
                <Container>
                   <div >
                       <Image  style={{width:'70px', height:'70px'}} src='https://www.carlogos.org/car-logos/ssangyong-logo.png' alt="" rounded/>
                   </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-white">       
                        <Nav.Link className='text-white' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-white'as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/home#blog">Client</Nav.Link>           
                        <Nav.Link className='text-white' as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/explore">Explore Products</Nav.Link>
                    {user?.email?
                        (
                            <>
                            <Nav.Link className='text-white' as={HashLink} to="/dashboard">DashBoard</Nav.Link>
                        <Button className='bg-info rounded-2 border-0 px-3 py-2 ms-2 ' onClick= {logout} variant="success">Logout</Button>
                            </>):
                        <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                    }
                        <Navbar.Text className='m-2 text-white'>
                              Signed in as: <a href="#login"> {user?.email} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
    
};

export default Navigation;