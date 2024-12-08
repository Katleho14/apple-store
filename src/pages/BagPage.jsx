import React from 'react';
import '../styles/Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebag from '../Components/SideBag';
import BagItems from '../Components/BagItems';

const BagPage = () => {
  return (
    <div className='dashboard'>

    <div className='main-content bag-content'>
    <h2>Check your Bag Items</h2>
      <BagItems/>
    </div>
    <Sidebag className='sidebag'/>
  </div>
  )
}

export default BagPage