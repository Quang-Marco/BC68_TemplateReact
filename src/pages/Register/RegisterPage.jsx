import React from "react";
import { useLottie } from "lottie-react";
import registerAnimation from "./../../assets/animation/registerAnimation.json";
import FormRegister from "../../components/FormRegister/FormRegister";

const RegisterPage = () => {
  const options = {
    animationData: registerAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
      <div>{View}</div>
      <div>
        <FormRegister />
      </div>
    </div>
  );
};

export default RegisterPage;
