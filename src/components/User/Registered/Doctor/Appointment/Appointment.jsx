import React, { useState } from "react"
import '../Doctor.css'
import { Link, Outlet } from "react-router-dom";
export default function Appointment(){
   const [appointments,setAppointments]=useState([{patientName:'sajan shrestha',date:'22 sep, 2024',time:'11:00pm',status:'confirmed',id:2}])
   return (
      <>
      <Link to='' className="p-4 border bg-gray-400 rounded-md">Upcomming appointemtn</Link>
      <Link to='history' className="p-4 border bg-gray-400 rounded-md">Completed Appointment</Link>
      <Outlet/>
      </>
    );
}