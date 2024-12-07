import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, toggleSaveAsDefault } from "../state/addressSlice";
import '../Styles/address.css';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const address = useSelector((state) => state.address);
  
  // State to hold validation errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAddress({ [name]: value }));
  };

  const handleSaveAsDefault = () => {
    dispatch(toggleSaveAsDefault());
  };

  const validateForm = () => {
    const newErrors = {};

    if (!address.name) newErrors.name = "Shipping name is required.";
    if (!address.street) newErrors.street = "Street name is required.";
    if (!address.city) newErrors.city = "City is required.";
    if (!address.state) newErrors.state = "State is required.";
    if (!address.country) newErrors.country = "Country is required.";

    return newErrors;
  };

  const handleSubmit = () => {
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      alert("Address added successfully!");
      navigate('/checkout'); // Navigate to the /checkout route
    } else {
      setErrors(formErrors); // Set validation errors
    }
  };

  return (
    <div className="address-container">
      <form className="address-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Shipping Name</label> <br />
        <input
          type="text"
          name="name"
          placeholder="John Maker"
          value={address.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br /> <br />

        <label htmlFor="street">Street Name</label> <br />
        <input
          type="text"
          name="street"
          placeholder="123 Place Grond Street"
          value={address.street}
          onChange={handleChange}
        />
        {errors.street && <p className="error">{errors.street}</p>}
        <br /> <br />

        <label htmlFor="city">City</label> <br />
        <input
          type="text"
          name="city"
          placeholder="Vermont"
          value={address.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}
        <br /> <br />

        <label htmlFor="state">State</label> <br />
        <input
          type="text"
          name="state"
          placeholder="California"
          value={address.state}
          onChange={handleChange}
        />
        {errors.state && <p className="error">{errors.state}</p>}
        <br /> <br />

        <label htmlFor="country">Country</label> <br />
        <input
          type="text"
          name="country"
          placeholder="United States of America"
          value={address.country}
          onChange={handleChange}
        />
        {errors.country && <p className="error">{errors.country}</p>}
        <br />

        <span>
          <input
            type="checkbox"
            name="saveAsDefault"
            checked={address.saveAsDefault}
            onChange={handleSaveAsDefault}
          />
          <p>Save this as your default address</p>
        </span> <br />

        <button className="address-btn" type="button" onClick={handleSubmit}>Add Address</button> <br /> <br /> <br />

        <span className="last-details">
          <a href="/">Back</a>
          <span className="lock">
            <FaLock className="icon" />
            <p className="connection">Secure Connection</p>
          </span>
        </span>
      </form>
    </div>
  );
};

export default Address;
