import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function GuestHeader() {
  const linkStyle = {
    borderRadius: '5px', // CamelCase property
    padding: '10px', // Adding padding inline
    border: '1px solid #ccc', // Example border style
    textDecoration: 'none', // Remove underline from links
  };
  const userInfo=useSelector(state=>state).userInfo
  return (
    <div className="border w-full top-0 flex justify-between px-[20%] cursor-pointer">
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About Us
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact Us
      </Link>
      <Link to="/register" style={linkStyle}>
        Register
      </Link>
      <div style={linkStyle} onClick={()=>{
        toast.success('hello my anmelskfdja')
        console.log(userInfo)
      }}>klafllasjf</div>
    </div>
  );
}
