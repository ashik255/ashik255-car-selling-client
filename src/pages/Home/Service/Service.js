import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{title,img,price,name,_id} = props.service;
    return (
        < >
        <Col  style={{minHeight:'550px'}} className='mx-auto' lg={4}>
          <Card>
            <Card.Img style={{height:'300px'}} variant="top" src={img} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
               <p>   {title} </p>
              <Card.Text>
              <h5> {price} </h5>
              
              </Card.Text>
              <Card.Footer>
              <Link  to={`/detail/${_id}`}> <Button style={{backgroundColor:'#37474f'}} className='text-decoration-none mt-3 w-100  border-0'> Purchase</Button> </Link>
    </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
   </>
    );
};

export default Service;