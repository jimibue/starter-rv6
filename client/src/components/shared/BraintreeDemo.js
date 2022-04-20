import React, {  useEffect, useState } from "react";
import braintree from "braintree-web-drop-in";
import BraintreeDropin from "braintree-dropin-react";
import BraintreeSubmitButton from "./BrainTreeSubmitButton";
import axios from "axios";

const BraintreeDemo = (props) => {
  // state = { loaded: false, token: '', };
  const [loaded, setLoaded] = useState(false);
  const [token, setToken] = useState('');
  const [amount, setAmount] = useState(100);

  useEffect(()=>{
    getToken()
  },[])

  const getToken = async()=>{
    let res = await axios.get('/api/braintree_token')
    setToken(res.data)
    setLoaded(true)
  }
  const handlePaymentMethod = async (payload) => {
      console.log('payload', payload)
    //TODO: Make axios call to our server to post a payment
    // amount, nonce
    try{
       let res = await axios.post('/api/payment', {amount, ...payload})
       // expecting success
       console.log('transaction id?', res.data)
       //  store braintree_transaction.id to your db, 
       // redirect to like transaction page and show user the transaction id
    }catch(err){ 
      // have some good error handling here for ui/ux
      console.log('err', err)
      console.log('err', err.response)
    }
  };
  if(!loaded){
    return <p>spinner</p>
  }
  return (
    <div>
      <h1>BT demo</h1>
      <p>amount</p>
      <input value={amount} onChange={(e)=> setAmount(e.target.value)} />
      <BraintreeDropin
        braintree={braintree}
        authorizationToken={token}
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
