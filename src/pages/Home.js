import React from 'react';
import Banner from '../components/Banner';
import FeatureProduct from '../components/FeatureProduct';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';


const Home = () => {
    return (
        <div>
           <Banner/>
           <FeatureProduct/>
           <Newsletter/>
           <Footer/>
        </div>
    );
};

export default Home;