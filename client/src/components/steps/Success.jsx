import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "../Confetti";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="p-8  shadow-2xl flex-col flex justify-center items-center">
        <div className="text-[100px]">🎉</div>
        <div className="text-3xl font-bold ">Success!</div>
      </div>
      <Confetti />
    </div>
  );
};

export default Success;
