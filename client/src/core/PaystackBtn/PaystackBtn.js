import React, { useState } from "react";
import { PaystackConsumer } from "react-paystack";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import auth from "../../auth/auth-helper";
import { Redirect } from "react-router-dom";

const PaystackBtn = ({ amount }) => {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const [paymentStatus, setPaymentStatus] = useState("");

  const jwt = auth.isAuthenticated();

  if (!jwt.token) {
    return <Redirect to="/signin" />;
  }

  const config = {
    reference: new Date().getTime().toString(),
    email: userData.email,
    amount: amount,
    publicKey: "pk_test_490f96f22dfe35eede7d8a9b4947e2cb6602160f",
  };

  // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setPaymentStatus(reference.status);
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

  if (paymentStatus === "success") {
    var templateParams = {
      name: userData.name,
      email: userData.email,
      message: `Total amount of products is ${amount}`,
    };

    emailjs
      .send(
        "service_k9th3hd",
        "contact_form",
        templateParams,
        "YxU9ucgaEXCDwBI0X"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
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
