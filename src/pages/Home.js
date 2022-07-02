import React from 'react';
import Banner from '../components/Banner';
import BannerPic from '../components/BannerPic';
import Category from '../components/Category';
import FeatureProduct from '../components/FeatureProduct';
import Footer from '../components/Footer';
import LatestCollction from '../components/LatestCollction';
import Newsletter from '../components/Newsletter';
import SecondHeader from '../components/SecondHeader';


const Home = () => {
    return (
      <div>
        <Banner />
        <BannerPic/>
        <SecondHeader />
        <Category />
        <LatestCollction />
        <Newsletter />
        <Footer />
      </div>
    );
};

export default Home;