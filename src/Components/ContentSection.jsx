import React, { useEffect } from "react";
import "../styles/ContentSection.css";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import DashboardBag from "./DashboardBag";
import addbagIcon from '../Assets/addbagIcon.png';
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';





function ContentSection(){
  // gets product from redux store
  const products = useSelector((state) => state.products.items || []); 
  // dispatches/adds products to carts
  const dispatch = useDispatch(); 
  // Dispatch the addToCart action with the product
  const handleAddToCart = (product) => {
    dispatch(addItem(product)); 
  };

  
  // Filters products
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

// search functionality
  const handleSearchChange = (query) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

 
  


  return (
    <>
    <SideBar/>
 
    <SearchBar onSearch={handleSearchChange} />
   


    <div className="content-area">
      
    {filteredProducts.length >  0 ? (
          filteredProducts.map((product, index) =>  (
        <div className="item-card" key={index}>
          <div className="product-image">
            <Link to={`/product/${product.id}`} >
            <img
              className="product-image-content"
              src={product.image}
              width={150}
              alt={product.name}
            />
            </Link>
          </div>
          <div className="product-content">
            <div className="product-name">{product.name}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-action">
              <div className="product-price">${product.price}</div>
              <div className="action-button">
                <img
                  className="action-icon"
                  src={addbagIcon}
                  alt="Buy Now"
                  onClick={() => handleAddToCart(product)}
                />
              </div>
            </div>
          </div>
        </div>
      ))
    ):(
      <p>No Products match your search</p>
    )}            
  </div>
  <DashboardBag />
     </>
      
        );
      

}
export default ContentSection;