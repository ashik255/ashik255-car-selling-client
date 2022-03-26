import React from 'react';
import { Col,Card } from 'react-bootstrap';
// import './blog.css'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

const Blog = (props) => {
    const{title,img,name} = props.blog;
    return (
        < >
        <Col lg={4}>
          <Card style={{minHeight:'580px'}}>
            <Card.Img style={{height:'400px'}} className='blog-img' variant="top" src={img} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
               <p>  {title} </p>
              <Card.Text>
             {/* <Link  to={`/detail/${_id}`}> <Button className='text-decoration-none mt-3 w-100 bg-dark border-0'> Purchase</Button> </Link> */}
             <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   </>
    );
};

export default Blog;