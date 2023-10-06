import React, { useState } from "react";
import FormUserDetails from "./steps/FormUserDetails";
import FormPersonalDetails from "./steps/FormPersonalDetails";
import Success from "./steps/Success";

const SignUpUser = () => {
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <FormUserDetails step={step} setStep={setStep} />;
    case 2:
      return <FormPersonalDetails step={step} setStep={setStep} />;
    case 3:
      return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default SignUpUser;
