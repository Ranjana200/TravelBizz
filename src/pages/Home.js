import React from 'react';
import Layout from '../components/Layout/Layout';
import Shubam from '../image/shubam.jpg';
import Harsha from '../image/harsha.jpg';
import JW from '../image/jw.jpg';
import Racade from '../image/facade.jpg';
import Akash from '../image/Akash.jpg';
import Blue from '../image/blue.jpg'
import Hotel1 from '../image/hotel1.jpeg'
import Kimmane from '../image/kimmane.jpg'
import '../styles/HomeStyles.css'; // Import CSS file for additional styles

const Home = () => {
  return (
    <Layout>
      <div className='header-container'>
        
       
      <div className='home-container'>
      
        <div className='home' style={{ backgroundImage: `url(${Racade})` }} />
        <div className='home' style={{ backgroundImage: `url(${Harsha})` }} /> 
        <div className='home1' style={{ backgroundImage: `url(${Hotel1})` }} />   
        <div className='home' style={{ backgroundImage: `url(${JW})` }} />
        <div className='home' style={{ backgroundImage: `url(${Akash})` }} />
        <div className='home' style={{ backgroundImage: `url(${Blue})` }} />
        <div className='home' style={{ backgroundImage: `url(${Shubam})` }} />
        <div className='home' style={{ backgroundImage: `url(${Kimmane})` }} />
      </div>
      
      </div>
    </Layout>
  );
};

export default Home;
