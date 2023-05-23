import React from 'react';
import Layout from '../components/Layout/Layout';
import Koodli from '../image/koodlip.jpg';
import Kuppa from '../image/kuppap.jpg';
import Shiva from '../image/shivap.jpg';
import Jog from '../image/jogp.jpg';
import Sakre from '../image/sakrep.jpg';


import '../styles/PlaceStyles.css'; // Import CSS file for additional styles

const Places = () => {
  return (
    <Layout>
      <div className='heaer-container'>
       
      <div className='places-container'>
      <div className='places' style={{ backgroundImage: `url(${Koodli})` }} />
        <div className='places' style={{ backgroundImage: `url(${Kuppa})` }} />
        <div className='places' style={{ backgroundImage: `url(${Shiva})` }} />
        <div className='places' style={{ backgroundImage: `url(${Jog})` }} />
        <div className='places' style={{ backgroundImage: `url(${Sakre})` }} />
        
      </div>
      
      </div>
    </Layout>
  );
};

export default Places;
