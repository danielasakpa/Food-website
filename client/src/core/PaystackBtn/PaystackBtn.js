import React, { useState, useEffect, useContext } from "react";
import { PaystackConsumer } from "react-paystack";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import auth from "../../auth/auth-helper";
import { read } from "../../user/api-user.js";

const PaystackBtn = ({amount }) => {
  const [paymentStatus, setPaymentStatus] = useState("");
  // const [adress, setAdress] = useState("");
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);

  const jwt = auth.isAuthenticated();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    read(
      {
        userId: "634005bdef7dee29934f8c45",
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        setUser(data);
      }
    });
  }, []);

  console.log(user)

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount: amount,
    publicKey: "pk_test_490f96f22dfe35eede7d8a9b4947e2cb6602160f",
  };

  // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setPaymentStatus(reference.status);
    console.log(reference);
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  console.log(paymentStatus);

  if (paymentStatus == "success") {
    var templateParams = {
      name: user.name,
      email: user.email,
      message: `Total amount of products is ${amount}`
  };
  
  emailjs.send('service_k9th3hd','contact_form', templateParams, "YxU9ucgaEXCDwBI0X")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
       console.log('FAILED...', err);
    });
  }

  return (
    <PaystackConsumer {...componentProps}>
      {({ initializePayment }) => (
        <Button
          variant="contained"
          color="success"
          onClick={() => initializePayment(handleSuccess, handleClose)}
        >
          Purchase items!
        </Button>
      )}
    </PaystackConsumer>
  );
};

export default PaystackBtn;
