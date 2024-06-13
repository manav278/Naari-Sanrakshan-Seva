import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import Howworks from "../assets/Howworks.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const isLoggedIn = localStorage.getItem("email");
  return (
    <nav className="bg-[#009688] md:p-1 text-[#ffffff]">
      <div className="mx-auto flex justify-between md:justify-around sm:items-center">
        <div>
          {/* 592*422 */}
          <img src={logo} width="26.31204%" height="18.72%"></img>
        </div>
        <div className="hidden md:flex space-x-12 items-center font-bold">
          <a href="/" className="hover:text-[#FFC107] hover:font-extrabold">
            HOME
          </a>
          <a href="/about" className="hover:text-[#FFC107]">
            ABOUTUS
          </a>
          <button
            onClick={() => setIsImageVisible(!isImageVisible)}
            className="text-[#FFC107] border border-[#FFC107] p-2 rounded hover:text-[#212529] hover:bg-[#FFC107] whitespace-nowrap"
          >
            How it Works
          </button>
          {isLoggedIn && (
            <a href="/dashboard" className="hover:text-[#FFC107]">
              DASHBOARD
            </a>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-[#FFC107] focus:outline-none"
            >
              LOGOUT
            </button>
          ) : (
            <a href="/login" className="hover:text-[#FFC107]">
              LOGIN
            </a>
          )}
        </div>
        <div className="md:hidden flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-black focus:outline-none items-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col h-screen bg-black">
          <a
            href="/"
            className="block text-center text-gray-300 p-4 hover:text-[#FFC107]"
          >
            HOME
          </a>
          <a
            href="/about"
            className="block text-center text-gray-300 p-4 hover:text-[#FFC107]"
          >
            ABOUTUS
          </a>
          <div className="text-center block px-24 py-4">
            <button
              onClick={() => setIsImageVisible(!isImageVisible)}
              className="w-[100%] text-center text-[#FFC107] border border-[#FFC107] p-2 rounded hover:text-[#212529] hover:bg-[#FFC107]"
            >
              How it Works
            </button>
          </div>
          {isLoggedIn && (
            <a
              href="/dashboard"
              className="block text-center text-gray-300 p-4 hover:text-[#FFC107]"
            >
              DASHBOARD
            </a>
          )}
          {isLoggedIn ? (
            <div className="text-center block px-24 py-4">
              <button
                onClick={handleLogout}
                className="w-[100%] text-center text-[#FFC107] border border-[#FFC107] p-2 rounded hover:text-[#212529] hover:bg-[#FFC107]"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="block text-center text-gray-300 p-4 hover:text-[#FFC107]"
            >
              LOGIN
            </a>
          )}
        </div>
      )}
      {isImageVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <button
              onClick={() => setIsImageVisible(false)}
              className="absolute top-0 right-0 m-4 text-white text-2xl focus:outline-none"
            >
              &times;
            </button>
            <img
              src={Howworks}
              alt="Placeholder"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
