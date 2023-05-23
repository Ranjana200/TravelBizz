import React from 'react';
import Layout from '../components/Layout/Layout';

import Bangar from '../image/bangarc.jpg';
import Hakuna from '../image/hakunac.jpg';
import Manju from '../image/manjuc.jpg';
import Nunga from '../image/nungac.jpg';


import '../styles/ChatStyles.css'; // Import CSS file for additional styles

const Chats = () => {
  return (
    <Layout>
      <div className='headere-container'>
    
      <div className='chats-container'>
      <div className='chats' style={{ backgroundImage: `url(${Bangar})` }} />
        <div className='chats' style={{ backgroundImage: `url(${Hakuna})` }} />
        <div className='chats' style={{ backgroundImage: `url(${Manju})` }} />
        <div className='chats' style={{ backgroundImage: `url(${Nunga})` }} />

      </div>
      
      </div>
    </Layout>
  );
};

export default Chats;
