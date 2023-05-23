import React from 'react';
import Layout from '../components/Layout/Layout';
import Mathura from '../image/mathura.jpg';
import Harsha from '../image/harsha.jpg';
import Sreeram from '../image/sreeram.jpg';
import Racade from '../image/facade.jpg';
import Gaurav from '../image/gaurav.jpg';


import '../styles/LodgeStyles.css'; // Import CSS file for additional styles

const Lodges = () => {
  return (
    <Layout>
      <div className='headers-container'>
      
      <div className='lodges-container'>
      <div className='lodges' style={{ backgroundImage: `url(${Sreeram})` }} />
      <div className='lodges' style={{ backgroundImage: `url(${Racade})` }} />
        <div className='lodges' style={{ backgroundImage: `url(${Mathura})` }} />
        <div className='lodges' style={{ backgroundImage: `url(${Harsha})` }} />
        <div className='lodges' style={{ backgroundImage: `url(${Gaurav})` }} />
       
      </div>
      
      </div>
    </Layout>
  );
};

export default Lodges;


