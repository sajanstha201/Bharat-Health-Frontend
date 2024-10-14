import React, { useState } from "react"
import '../Doctor.css'
import { Link, Outlet } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
export default function Appointment(){
   const [appointments,setAppointments]=useState([{patient_id:1,patientName:'sajan shrestha',date:'22 sep, 2024',time:'11:00pm',status:'confirmed',id:2}
      ,{patient_id:1,patientName:'sajan shrestha',date:'22 sep, 2024',time:'11:00pm',status:'confirmed',id:2},
      {patient_id:1,patientName:'sajan shrestha',date:'22 sep, 2024',time:'11:00pm',status:'confirmed',id:2},
   ])
   return (
      <>
      <div className="w-full flex flex-wrap gap-5 items-center justify-center">
      {appointments.map((e,i)=>(<AppointmentCard patientName={e.patientName} date={e.date} time={e.time} status={e.status} patientId={e.patient_id}/>))}
      </div>
      
      <Link to='' className="p-4 border bg-gray-400 rounded-md">Upcomming appointemtn</Link>
      <Link to='history' className="p-4 border bg-gray-400 rounded-md">Completed Appointment</Link>
      <Outlet/>
      </>
    );
}