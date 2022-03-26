import React from 'react';
import ReviewMap from '../../Login/ReviewSection/ReviewMap';
import Blogs from '../BlogSection/Blogs';
import Services from '../Services/Services';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div id='home'>
            <Banner/>
            <br/>
            <Services></Services>
            <Blogs></Blogs>
            <ReviewMap></ReviewMap>
        </div>
    );
};

export default Home;