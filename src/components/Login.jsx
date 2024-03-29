import loginBG from "../img/login-bg.jpeg";
import React, { useState } from "react";
import "../custom.css";
import Logo from "./logo/Logo";
import store from "../store/store";
import { dispatchLoginSuccess, dispatchLoginRequest } from "../store/store";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // presume user always enter correct credentials
    dispatchLoginSuccess(email, dispatch);
  };

  return (
    <div className="relative flex justify-center">
      <div className="absolute transform translate-y-[100px] text-purple-400 text-[23px] font-bold z-10 mx-auto">
        Login to HabitHUB
      </div>

      <div className="w-[320px] font-thin absolute text-center transform translate-y-[140px] text-gray-800 text-[17px] z-10 mx-auto">
        Welcome back! Sign in using your social account or email to continue us
      </div>

      {/* here come logos for different social media platforms */}
      <div className="z-10 w-[300px] transform translate-y-[220px] mr-[-50px]">
        <div className="flex w-[300px] space-x-12 ">
          <Logo brandLogo={"google"} />
          <Logo brandLogo={"facebook"} />
          <Logo brandLogo={"apple"} />
        </div>

        <div className="mx-[8px]"></div>

        <div className="strike-sides text-gray-500 transform translate-y-[40px] text-[22px] font-bold">
          OR
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full flex flex-col justify-start items-center">
        {/* backgound login img */}
        <img src={loginBG} className="h-screen w-full object-cover" />

        {/* login form */}
        <form className="transform translate-y-[-500px]">
          <div className="bg-white p-5 rounded-lg w-[400px] shadow-lg">
            <input
              value={email}
              onInput={handleEmailChange}
              type="text"
              placeholder="Email"
              className="placeholder-black w-full border-b border-black focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* line-breaker */}
          <div className="my-8" />

          <div className="bg-white p-5 rounded-lg w-[400px] shadow-lg">
            <input
              value={password}
              onInput={handlePasswordChange}
              type="password"
              placeholder="Password"
              className=" placeholder-black w-full border-b border-black focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </form>

        <button
          onClick={handleLogin}
          className="text-2xl font-bold shadow-lg py-4 transform translate-y-[-400px] w-[200px] self-center bg-white text-black rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
