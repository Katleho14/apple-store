import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../Components/SearchBar'
import '../Styles/Dashboard.css';
import ProductGrid from '../Components/ProductGrid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebag from '../Components/SideBag';


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar className='sidebar'/>
      <div className='main-content'>
        <SearchBar />
        <ProductGrid/>
      </div>
      <Sidebag className='sidebag'/>
    </div>
  );
}

export default Dashboard;
