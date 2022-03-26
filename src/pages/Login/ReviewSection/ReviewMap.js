import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReviewDisplay from './ReviewDisplay';

const ReviewMap = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        const url = `https://sleepy-forest-29303.herokuapp.com/reviews`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            setData(data);
        })
    }, [])
    return (
        <div className='my-5  ' style={{backgroundColor:'#ffffe6'}}>
            <h2 className='pt-3'> Our Reviews </h2>

        
        <Row id='reviews' xs={1} md={2} className="g-4 m-3">
               
            {
                data.map(user => <ReviewDisplay
                key = {data.key}
                reviews={user}
                
                ></ReviewDisplay>)
            }
            
        </Row>
        </div>
    );
};

export default ReviewMap;