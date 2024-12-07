import React from 'react';
import CardSelection from '../Components/CardSelection';
import AddNewCard from '../Components/AddNewCard';
import '../Styles/PaymentPage/PaymentPage.css';
import '../Styles/PaymentPage/AddNewCard.css';

const PaymentPage = () => {
    return (
        <div className="payment-page">
            <CardSelection />
            <AddNewCard />
        </div>
    );
};

export default PaymentPage;