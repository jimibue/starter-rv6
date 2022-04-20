import React from "react";
import braintree from "braintree-web-drop-in";
import BraintreeDropin from "braintree-dropin-react";
import BraintreeSubmitButton from "./BrainTreeSubmitButton";

const BraintreeDemo = (props) => {
  const handlePaymentMethod = (payload) => {
      console.log('payload', payload)
    //TODO: Make axios call to our server to post a payment
  };
  return (
    <div>
      <h1>BT demo</h1>
      <BraintreeDropin
        braintree={braintree}
        authorizationToken={"sandbox_fw5b3ftz_zmsjhgxyrsw6cfvh"}
        handlePaymentMethod={handlePaymentMethod}
        renderSubmitButton={BraintreeSubmitButton}
      />
    </div>
  );
};

// handlePaymentMethod - Required, to retrieve the payment method object
// renderSubmitButton - Use a custom component for the submit button.
//  Takes props onClick, isDisabled and text

// braintree - Required, this is braintree-web-drop-in

// authorizationToken - Required, authorization for Drop-In see in DOC
export default BraintreeDemo;
