import React, { useState } from "react";
import '../styles/Sidebar.css';
import logoImage from '../Assets/logoImage.png';
import  menuIcon from '../Assets/menuIcon.png';
import storeIcon from '../Assets/storeIcon.png';
import cartbag from '../Assets/cartbag.png';
import logoutIcon from '../Assets/logoutIcon.png';
import { Link } from "react-router-dom";

function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="nav-links-top">
                <div className="logo">
                    <img className="group-1" src={logoImage} alt="Logo" />
                </div>
                <div className="menu-icon" onClick={toggleSidebar}>
                    <div className="icon">
                        <img className="vector-4" src={menuIcon} alt="Menu Icon" />
                    </div>
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                      
                        <img className="vector-2" src={storeIcon} alt="Store" />
                      
                        {isExpanded && <span className="nav-text">Store</span>}
                        </Link> 
                   
                    <Link to="/cart" className="nav-link">
                    
                    <img className="vector-3" src={cartbag} alt="Cart" />
                    
                        {isExpanded && <span className="nav-text">Cart</span>}
                        </Link> 
                </div>
            </div>
            <div className="nav-link-bottom">
                <Link to="/" className="nav-link-2">
                    <img className="vector-5" src={logoutIcon} alt="Nav Link 3" />
                    {isExpanded && <span className="nav-text">LogOut</span>}
                </Link>
            </div>
        </div>
    );
}

export default SideBar;