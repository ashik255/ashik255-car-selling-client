import React from 'react';
import banner from '../../../../images/banner.jpg'

const Banner = () => {
    return (
        <div style={{position:'relative'}}>
            <img style={{width:'100%', height:'100vh'}} src={banner} alt=""/>
            <div style={{position:'absolute',top:'65%',left:'50%',transform: "translate(-50%, -50%)"}}>
                <h2 className='text-white'>JUST GRAB YOUR FAVORITE CAR FROM US!</h2>
            </div>
        </div>
    );
};

export default Banner;