import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import FeatureProduct from '../components/FeatureProduct';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <Newsletter/>
           <Footer/>
        </div>
    );
};

export default Home;