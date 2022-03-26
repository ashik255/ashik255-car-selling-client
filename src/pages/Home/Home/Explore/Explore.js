import React from 'react';
import { Card, Col ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explore = (props) => {
    const{title,img,dolar,name,_id} = props.explore;
    return (
        < >
        <Col style={{minHeight:'550px'}} lg={4}>
          <Card>
            <Card.Img style={{height:'300px'}}  variant="top" src={img} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
               <p>  {title} </p>
              <Card.Text>
              <h5> {dolar} </h5>
             <Link  to={`/detail/${_id}`}> <Button className='text-decoration-none mt-3 w-100 bg-dark border-0'> Purchase</Button> </Link>
             <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   </>
    );
};

export default Explore;