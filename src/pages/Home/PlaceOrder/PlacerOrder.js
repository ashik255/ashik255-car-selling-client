import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlacerOrder = (props) => {
    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const { serviceId } = useParams();
    const [placeOrder, setPlaceOrder] = useState([]);
    const [cart,setCart] =useState([]);

    useEffect(() => {
        fetch('https://car-selling-server-production.up.railway.app/services')
            .then(res => res.json())
            .then(data => {
                setDetails(data);
                // console.log(data);
            })
    }, [serviceId])
    const singleService = details.filter(data => data._id === (serviceId));
    // console.log(singleService);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPlaceData = {...placeOrder};
        newPlaceData.data = singleService;
        newPlaceData.id = singleService[0].id;
        newPlaceData.userInfo = user;
        newPlaceData[field] = value;
        console.log(newPlaceData);
        setPlaceOrder(newPlaceData);
    }
        const handletoSubmit = e => {

    
        //         // console.log("from handle add to cart",data)
                // const newCart = [...cart, data];
                // setCart(newCart);
                fetch('https://car-selling-server-production.up.railway.app/orders', {
                    method: 'POST',
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(placeOrder)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console(data);
                        // if (data._id) {
                        //     alert('Successfully added the user')
                        //     data.target.reset();
                        // }
                    })
                e.preventDefault();
                }
    return (
        <div>
            <Row id='' xs={1} md={2} className="g-4 m-3">
                <Col className='mx-auto'>
                    <Card>
                        <Card.Img variant="top" src={singleService[0]?.img} />
                        <Card.Body>
                            <Card.Title> {singleService[0]?.name}</Card.Title>
                            <p>  {singleService.title} </p>
                            <Card.Text>
                                <p>{singleService[0]?.title} </p>
                                <h2> {singleService[0]?.dolar} </h2>
                                {/* <Button onClick={() => {
                props.handleAddToCart(props.service);
              }} className='mt-3 w-100 bg-primary border-0'>Add to  MyOrder</Button> */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Form onSubmit= {handletoSubmit} className='border rounded-3 p-5'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                 type="names"
                                name="name"
                               
                                onChange={handleOnBlur}  placeholder={user?.displayName}  />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                            name="email"
                            onChange={handleOnBlur}   placeholder={user?.email} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                            name ="address"
                             onChange={handleOnBlur} placeholder="" />
                            
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                name="city"
                                onChange={handleOnBlur} placeholder='' />
                              
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Phone Number</Form.Label>

                                <Form.Control
                                name='number'
                                type='phone'
                                
                                onChange={handleOnBlur}
                                
                                placeholder='' />
                              
                            </Form.Group>
                        </Row>
                        <Button  variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default PlacerOrder;