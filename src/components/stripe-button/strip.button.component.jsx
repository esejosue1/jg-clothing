import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './strip.button.styles.scss';

const StripeCheckoutButton = ({price}) => {
    // stripe wants the payment process in cents
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IIo79IXz3gRl48SXeanDl8BMOWus2uodd2HFSdkJTsNVhq2aospkmksBb82IBmxkikyqWIDCTRLXqXa53sVL1wX00EgrtPsPk";

    //passed the token to the backend, the stripe server
    const onToken=token =>{
        console.log(token);
        alert('Payment Successful')
    }

    //components from the git stripe page 
    return (
        <StripeCheckout
            label='Pay Now'
            name='JG Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;