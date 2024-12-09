import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch for Redux actions
import { useNavigate } from 'react-router-dom'; // Import useNavigate to programmatically navigate
import { updateAddress } from '../redux/checkoutSlice'; // Adjust the path as necessary
import '../styles/ShippingAdd.css'; 

const ShippingAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const existingAddress = useSelector((state) => state.user?.address || {});

    
    const [address, setAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    // useEffect(() => {
    //     if (existingAddress) {
    //         setAddress(existingAddress);
    //     }
    // }, [existingAddress]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setAddress({ ...address, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Dispatch the updated address to Redux store
    //     dispatch(updateAddress(address));
    //     // Navigate back to the Checkout page
    //     navigate('/checkout');
    // };

   

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the Redux store or component state
        dispatch({ type: 'updateAdress', payload: address });
        dispatch(updateAddress(address)); // Dispatch to Redux store
        navigate('/checkout'); // Navigate back to checkout


        console.log('Submitted Address:', address);
    };

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };





    return (
        <div className="shipping-address-form">
            <h2>Edit Shipping Address</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={address.name} onChange={handleChange} required />
                <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" value={address.city} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={address.state} onChange={handleChange} required />
                <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} onChange={handleChange} required />
                <input type="text" name="country" placeholder="Country" value={address.country} onChange={handleChange} required />
                <button type="submit">Save Address</button>
            </form>
        </div>
    );
};

export default ShippingAdd;