import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css'; 


// Main CheckoutPage component
function Checkout() {
    const navigate = useNavigate();
    const address = useSelector((state) => state.checkout.address);
    const paymentMethod = useSelector((state) => state.checkout.paymentMethod);
    const cartItems = useSelector((state) => state.cart.cartItems || [] );

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);  // Safely reduce cartItems
    ;
console.log('Checkout State:', {
    address,
    paymentMethod,
    cartItems,
});





    console.log('Cart Items:', cartItems); // Debugging line

    const handlePlaceOrder = () => {
        alert('Order Placed')
    };

    const handleChangeShipping = () => {
        navigate('/shipping-add'); // Navigate to ShippingAdd component
    };

    const handleChangePayment = () => {
        // navigate('/payment-method'); // Navigate to PaymentMeth component
        navigate('/payment-method');
    };

    return (
        <div className="checkout-page">
            <ShippingAddress address={address} onChange={handleChangeShipping} />
            <PaymentMethod paymentMethod={paymentMethod} onChange={handleChangePayment} />
            <ReviewYourBag cartItems={cartItems} totalPrice={totalPrice} />
            <OrderSummary totalPrice={totalPrice} />
            <button onClick={handlePlaceOrder}>Place your order</button>
        </div>
    );
}

// ShippingAddress component
function ShippingAddress({ address, onChange }) {
    return (
        <div className="shipping-address">
            <h2>Shipping Address</h2>
                   {address ? (
                    <div>
                        <p>{address.name}</p>
                        <p>{address.street}</p>
                        <p>{address.city}, {address.zip}</p>
                        <p>{address.country}</p>
                        <button onClick={onChange}>Change</button>
                    </div>
                ) : (
                    <>
                    <p>No address provided.</p>
                    <button onClick={onChange}>Change</button>
                    </>
                )}
            </div>
    )};



// PaymentMethod component
function PaymentMethod({ paymentMethod={}, onChange }) {
    console.log('Payment Method:', paymentMethod); // Debugging line
    const lastFourDigits = paymentMethod?.cardNumber ? paymentMethod.cardNumber.slice(-4) : '####';
 
    

    return (
        <div className="payment-method">
            <h2>Payment Method</h2>
                  {paymentMethod ? (
                    <div>
                        <p>Card Number: **** **** **** {lastFourDigits}</p>
                        <p>Expiry Date: {paymentMethod.expiryDate}</p>
                        <button onClick={onChange}>Change</button>
                    </div>
                ) : (
                    <>
                    <p>No payment method provided.</p>
                    <button onClick={onChange}>Change</button>
                    </>
                )}
            </div>
    )};


// Helper function to determine card type based on card number
// function getCardType(number) {
//     const re = {
//         Visa: /^4/,
//         MasterCard: /^5[1-5]/,
//         AMEX: /^3[47]/,
//         Discover: /^6(?:011|5)/,
//     };

//     for (const card in re) {
//         if (re[card].test(number)) {
//             return card;
//         }
//     }
//     return 'Unknown';
// }



const ReviewYourBag = () => {
    // Assuming cartItems is coming from the Redux store
    const cartItems = useSelector((state) => state.cart?.cartItems || []);

    // Check the length safely
    const itemCount = cartItems.length;

    return (
        <div>
        <h2>Your Bag</h2>
            {itemCount > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <>
                         {/* key={item.id}> */}
                            <img src={item.image} alt={item.name} width="50" />
                            <span>{item.name} x {item.quantity}</span>
                        </>
                    ))}
                </ul>
            ) : (
                <p>Your bag is empty.</p>
            )}
        </div>
    );
};



// OrderSummary component
function OrderSummary({ totalPrice }) {
    const calculateTotal = () => {
        const shipping = 6.99;
        const gst = totalPrice * 0.13; // 13% GST on total price
        return (totalPrice + shipping + gst).toFixed(2);
    };

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Items: ${totalPrice.toFixed(2)}</p>
            <p>Shipping: $6.99</p>
            <p>Estimated GST: ${(totalPrice * 0.13).toFixed(2)}</p>
            <p>Order Total: ${calculateTotal()}</p>
        </div>
    );
}

export default Checkout;

