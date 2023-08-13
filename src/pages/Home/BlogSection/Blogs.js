import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from './Blog';
import './blog.css'

const Blogs = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        const url = `https://car-selling-server-delta.vercel.app/blog`
        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            setData(data);
        })
    }, [])
    return (
        <div className='card'>
             <h2 className='pt-3'> WHAT OUR CLIENTS SAY </h2>
        <Row id='blog' xs={1} md={2} className="g-4 m-3">     
            {
                data.map(user => <Blog
                key = {data.key}
                blog={user}
                ></Blog>)
            }
            
        </Row> 
        </div>
    );
};

export default Blogs;