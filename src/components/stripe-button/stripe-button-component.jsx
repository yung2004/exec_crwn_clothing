import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100; // stripe want price in cents 
    const publishableKey = 'pk_test_51HbpbJE0wSbx9TJN4xYCuoWRGiakuWL5JddEuiaoTEive3aZEKB1woyTleSzZdEnuzt2maUUHRpSL1ci8a5r4Nxs00hEkMYvWx';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
        //send token to backend code for real charge
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd. '
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

            />
    
    )
}
 
export default StripeCheckoutButton;