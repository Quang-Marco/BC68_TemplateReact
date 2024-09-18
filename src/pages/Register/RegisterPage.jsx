import React from "react";
import { useLottie } from "lottie-react";
import registerAnimation from "./../../assets/animation/registerAnimation.json";
import FormRegister from "../../components/FormRegister/FormRegister";
import "./register.scss";
const RegisterPage = () => {
  const options = {
    animationData: registerAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="registerContent h-screen">
      <div className="lg:grid  lg:grid-cols-2  items-center h-screen">
        <div className="w-10/12  pl-20 hidden lg:block">{View}</div>
        <div className="ms:hidden md:hidden px-7 py-5">
          <img
            className=""
            src="https://www.cdnlogo.com/logos/f/4/fiverr.svg"
            alt=""
          />
        </div>
        <div className="px-2 rounded-lg lg:backdrop-blur-sm backdrop-blur-lg bg-green-700/30 py-5 mx-10">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
