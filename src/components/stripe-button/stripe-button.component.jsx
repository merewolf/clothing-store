import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe wants price in cents
  const publishableKey =
    'pk_test_51KRCrsFGgOMiAg3VJm8uEJm5ulsOtIurRBMFZHODiKxPP9cMjWDDycZ0XKsMPz7pzUkkY75IssZHDkaEpqWWHd6z00DjYm3Zhi';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Merewolf Emporium"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
