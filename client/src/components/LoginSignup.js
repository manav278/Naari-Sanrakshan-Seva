import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import colorkit from "../assets/colorkit.png";
import logo from "../assets/logo.jpg";
import Footer from "./Footer";
const LoginSignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row min-h-screen p-10">
        <div
          className="md:w-1/2 w-full flex items-center justify-center bg-indigo-600 p-8"
          style={{ backgroundImage: `url(${colorkit})` }}
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Empower Women, Empower the World
            </h1>
            <p className="text-lg text-white">
              Join us in making a difference.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-gray-200">
          <div className="w-full max-w-md">
            {isLogin ? <Login /> : <Signup />}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-[#009688]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
