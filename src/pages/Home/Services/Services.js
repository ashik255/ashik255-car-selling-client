import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [data,setData] = useState([]);
    

    useEffect(()=>{
        fetch('https://car-selling-server-production.up.railway.app/services')
        .then(res => res.json())
        .then (data => {
            setData(data);
        })
    },[])
    return (
        <div style ={{backgroundColor:'#ffffe6'}} >
                        <h2 className='pt-3'> Our Products</h2>

        
        <Row id='services' xs={1} md={2} className="g-4 m-3">
               
            {
                data.slice(0,6).map(user => <Service
                key = {data.key}
                service={user}
                ></Service>)
            }
            
        </Row> 
        </div>
    );
};

export default Services;