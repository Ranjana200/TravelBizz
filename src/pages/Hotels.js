import React from 'react';
import Layout from '../components/Layout/Layout';
import Shubam from '../image/shubam.jpg';
import Harsha from '../image/harsha.jpg';
import JW from '../image/jw.jpg';
import Racade from '../image/facade.jpg';
import Akash from '../image/Akash.jpg';
import Blue from '../image/blue.jpg'


import '../styles/HotelStyles.css'; // Import CSS file for additional styles

const Hotels = () => {
  return (
    <Layout>
      <div className='header-containers'>
      <div className='hotels-container'>
      <div className='hotels' style={{ backgroundImage: `url(${Racade})` }} />
        <div className='hotels' style={{ backgroundImage: `url(${Harsha})` }} />
        <div className='hotels' style={{ backgroundImage: `url(${JW})` }} />
        <div className='hotels' style={{ backgroundImage: `url(${Akash})` }} />
        <div className='hotels' style={{ backgroundImage: `url(${Blue})` }} />
        <div className='hotels' style={{ backgroundImage: `url(${Shubam})` }} />
      </div>
      
      </div>
    </Layout>
  );
};



export default Hotels;