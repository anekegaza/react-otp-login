// import React from 'react'

import { useState } from "react";
import OtpInput from "./otp-input";
import "./phone-login.css";

const PhoneOtpForm = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [showOtpInput, setshowOtpInput] = useState(false);

  //   Handle phone number input section
  const handlePhoneNumber = (event) => {
    setphoneNumber(event.target.value);
  };

  //   what happens when we click the sumbit button
  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    //  Phone NUmber Validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;

      //   setshowOtpInput(true); this gave me headache trying to figure out the problem with the code
    }
    //CALL BACKEND API HERE
    //SHOW OTP FIELD AFTER SUCCESSFUL SENDING
    setshowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    const continueBtn = document.getElementById("continue-btn");
    continueBtn.style.display = "inline-block";
  };
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            id="number-input"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button id="submit-btn" type="submit">
            Get OTP
          </button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
