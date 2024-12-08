/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/AddNewCard.css'

const AddNewCard = () => {
    const [cardholderName, setCardholderName] = useState("John Maker");
    const [cardNumber, setCardNumber] = useState("5126-5987-2214-7621");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [errors, setErrors] = useState({});

    const validateCardNumber = (number) => {
        // Basic validation for card number (simple length check)
        return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/.test(number);
    };

    const validateExpiryDate = (date) => {
        // Basic validation for expiry date (MM / YYYY)
        return /^(0[1-9]|1[0-2])\/\d{4}$/.test(date);
    };

    const validateCvc = (cvc) => {
        // Basic validation for CVC (3 digits)
        return /^[0-9]{3}$/.test(cvc);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        
        // Validate cardholder name
        if (!cardholderName) {
            newErrors.cardholderName = "Cardholder name is required.";
        }

        // Validate card number
        if (!validateCardNumber(cardNumber)) {
            newErrors.cardNumber = "Card number is invalid.";
        }

        // Validate expiry date
        if (!validateExpiryDate(expiryDate)) {
            newErrors.expiryDate = "Expiry date must be in MM / YYYY format.";
        }

        // Validate CVC
        if (!validateCvc(cvc)) {
            newErrors.cvc = "CVC must be 3 digits.";
        }

        if (Object.keys(newErrors).length === 0) {
            alert("Payment Successful!");
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="add-new-card">
            <h2>Add a New Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" value="John Maker" />
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" value="5126-5987-2214-7621" />
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM / YYYY" />
                    <label>CVC</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="form-group">
                    <input type="checkbox" /> Save this as your default payment method
                </div>
                <button type="submit" className="add-payment-method">
                    Add Payment Method
                </button>
            </form>
            <div className="back-button">Back</div>
            <div className="secure-connection">
                <i className="fas fa-lock"></i> Secure Connection
            </div>
        </div>
    );
};

export default AddNewCard;

