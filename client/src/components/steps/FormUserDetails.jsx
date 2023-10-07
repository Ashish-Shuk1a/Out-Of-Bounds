import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function FormUserDetails({ step, setStep, setUser }) {
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [otp, setOtp] = useState(null);
  const [sendotp, setSendotp] = useState(false);
  const [error, setError] = useState(null);

  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    let data = { number: number };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://hackmania-hackathon.vercel.app/api/otp",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("otp", response.data[0].data.OTP);
        setOtp(response.data[0].data.OTP);
        console.log(otp);
        setSendotp(true);
        setUser((prev) => ({ ...prev, number:number }));
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        number: number,
        otp: password,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://hackmania-hackathon.vercel.app/api/otp/verify",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.status === 200) {
            setStep(2);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      // await signInWithGoogle();
      navigate("/explore"); // Redirect to dashboard after successful sign in
    } catch (error) {
      console.log(error.message);
      alert("Google sign in failed. Please try again later.");
    }
  };

  return (
    <div
      className="flex justify-center items-center align-middle h-screen "
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif')`,
        backgroundSize: "cover ",
      }}
    >
      <div
        className="flex flex-col w-10/12 xl:w-4/12 lg:w-5/12 md:w-6/12 p-10 justify-center
         text-white rounded-2xl  bg-blue-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg
        height-40 font-semibold "
      >
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Mobile Number"
          className="m-1 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
        />
        {number && (
          <div className="flex justify-center items-center">
            <button
              className="bg-green-500 w-fit rounded-xl p-3 m-3 text-white font-semibold"
              onClick={handleSendOtp}
            >
              {!sendotp ? "Send Otp" : "Resend Otp"}
            </button>
          </div>
        )}
        {sendotp && (
          <input
            type="number"
            className="m-1 mt-5 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Otp here..."
          />
        )}
        {error && <div>{error}</div>}
        <div className="text-center justify-center">
          <button
            className="p-1 mt-6 m-1 font-semibold bg-blue-500 
              w-5/12 hover:bg-green-500
              hover:text-white rounded-lg text-xl "
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text-center">or</div>
          <button
            className="p-1 mt-2 m-1 font-semibold bg-white 
              w-7/12 hover:bg-blue-500
              hover:text-white rounded-lg text-md  text-black"
            onClick={handleGoogleSignIn}
          >
            <div className="flex text-center justify-center">
              Login with Google{" "}
              <img
                src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                className="h-7 ml-2 rounded-full"
              ></img>
            </div>
          </button>
          <div className="text-sm mt-4">
            <Link to="/reset">Forgot Password ?</Link>
          </div>
          <div className="text-blue-100 text-center">
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUserDetails;
