import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Explore from './Explore';

const Explores = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://car-selling-server-production.up.railway.app/services')
        .then(res => res.json())
        .then (data => {
            setData(data);
        })
    },[])
    return (
        <Row id='explore' xs={1} md={2} className="g-4 m-3">
               
        {
            data.map(user => <Explore
            key = {data.key}
            explore={user}
            ></Explore>)
        }
        
    </Row> 
    );
};

export default Explores;