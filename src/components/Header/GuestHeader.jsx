import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function GuestHeader() {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div className="w-full top-0 flex justify-between items-center px-[20%] bg-gradient-to-r from-green-400 to-green-600 text-white py-4 shadow-lg">
      <Link
        to="/"
        className="rounded-lg px-6 py-3 border border-transparent text-white hover:text-white hover:bg-green-700 active:bg-green-800 transition duration-300 transform hover:scale-105 active:scale-95 shadow-md"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="rounded-lg px-6 py-3 border border-transparent text-white hover:text-white hover:bg-green-700 active:bg-green-800 transition duration-300 transform hover:scale-105 active:scale-95 shadow-md"
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className="rounded-lg px-6 py-3 border border-transparent text-white hover:text-white hover:bg-green-700 active:bg-green-800 transition duration-300 transform hover:scale-105 active:scale-95 shadow-md"
      >
        Contact Us
      </Link>
      <Link
        to="/register"
        className="rounded-lg px-6 py-3 border border-transparent text-white hover:text-white hover:bg-green-700 active:bg-green-800 transition duration-300 transform hover:scale-105 active:scale-95 shadow-md"
      >
        Register
      </Link>
    </div>
  );
}
