import React from 'react';
import '../Styles/PaymentPage/CardSelection.css';

const CardSelection = () => {
    return (
        <div className="card-selection">
            <h2>Select a Card</h2>
            <div className="card-option">
                <i className="fas fa-credit-card"></i> MasterCard ending in 4242
            </div>
            <div className="card-option">
                <i className="fas fa-credit-card"></i> VISA Debit ending in 2894
            </div>
        </div>
    );
};

export default CardSelection;