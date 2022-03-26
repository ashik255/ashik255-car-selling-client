// import { Card } from '@mui/material';
import { Rating } from '@mui/material';
import React from 'react';
import { Col ,Card} from 'react-bootstrap';

const ReviewDisplay = (props) => {
    // console.log(props)

    const{email,name,comments, ratings} = props.reviews;

    return (
       < >
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title> {name}</Card.Title>
              <h5>{email} </h5>
               <p>  {comments} </p>
              <Card.Text>
             <div>
             <Rating
  name="simple-controlled"
  value={parseInt(ratings)}
/>
             </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   </>
    );
};


export default ReviewDisplay;