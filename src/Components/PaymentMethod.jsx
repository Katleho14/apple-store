import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch for Redux actions
import { useNavigate } from 'react-router-dom'; // Import useNavigate to programmatically navigate
import { updatePaymentMethod } from '../redux/checkoutSlice'; // Adjust the path based on your file structure
import '../styles/PaymentMethod.css'; 

const PaymentMethod = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: ''
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setPaymentMethod({ ...paymentMethod, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Dispatch the updated payment method to Redux store
    //     dispatch(updatePaymentMethod(paymentMethod)); 
    //     // Navigate back to the Checkout page
    //     navigate('/checkout');
    // };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the Redux store or component state
       
        dispatch(updatePaymentMethod(paymentMethod)); // Dispatch to Redux store
        navigate('/checkout'); // Navigate back to checkout

        console.log('Submitted Payment Method:', paymentMethod);
    };

    const handleChange = (e) => {
        setPaymentMethod({
            ...paymentMethod,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className="payment-method-form">
            <h2>Edit Payment Method</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="cardNumber" placeholder="Card Number" value={paymentMethod.cardNumber} onChange={handleChange} required />
                <input type="text" name="cardHolder" placeholder="Card Holder Name" value={paymentMethod.cardHolder} onChange={handleChange} required />
                <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" value={paymentMethod.expiryDate} onChange={handleChange} required />
                <input type="text" name="cvv" placeholder="CVV" value={paymentMethod.cvv} onChange={handleChange} required />
                <button type="submit">Save Payment Method</button>
            </form>
        </div>
    );
};

export default PaymentMethod;
