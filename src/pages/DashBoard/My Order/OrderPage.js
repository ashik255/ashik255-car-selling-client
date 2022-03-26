import React, { useState } from 'react';
import { Card, Col ,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const OrderPage = (props) => {
    const history = useHistory();
    console.log('order',props);
    const{address,city,_id,number} = props.service;
    const{img,name,title} = props.service.data[0];
    const{email} = props.service.userInfo;
    // const [order,setOrder]=useState([]);
    
    const handleRemove = (id) =>{
        console.log('removed id',id)
        const  proceed = window.confirm('Are you sure ,you want to delete?')
        if(proceed){
            const url = `https://sleepy-forest-29303.herokuapp.com/orders/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then( data => {
            if(data) {
                // console.log(data)
                // window.location.reload(true);
                history.push('/dashboard/review')
                history.push('/dashboard/myorders')
                alert('delete Successfully')
                // const remainUsers = order.filter(user => user._id !== id);
                // setOrder(remainUsers);  
            }
        })
        }
    }
    return (
        <>
        <Col lg={4}>
          <Card>
              
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
               <p>  {title} </p>
               <Card.Title> {email}</Card.Title>
              <Card.Text>
              <h6> {address} </h6>
              <h5> {city} </h5>
              <h5> {number} </h5>
              </Card.Text>
              
              <Button className='bg-info rounded-2 w-30' onClick={()=> handleRemove(_id)} >Remove</Button>
            </Card.Body>
          </Card>
        </Col>
   </>
    );
};

export default OrderPage;