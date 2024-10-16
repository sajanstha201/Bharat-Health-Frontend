import React, { useState ,useEffect} from "react"
import '../Doctor.css'
import { Link, Outlet } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
export default function UpcommingAppointment(){
   const [appointments,setAppointments]=useState([{patient_id:1,patientName:'sajan shrestha',date:'22 sep, 2024',time:'11:00pm',status:'confirmed',id:2}
      ,{patient_id:1,patientName:'sajan shrestha',date:'22 sep, 2024',time:'11:00pm',status:'confirmed',id:2},
      {patient_id:1,patientName:'sajan shrestha',date:'22 sep, 2024',time:'11:00pm',status:'confirmed',id:2},
   ])
   const baseUrl=useSelector(state=>state.baseUrl).backend
   const userInfo=useSelector(state=>state.userInfo)
   const fetchAppointment=async()=>{
      try{
         const response=await axios.get(`${baseUrl}api/doctor/appointments/${userInfo.id}/?status=${'upcomming'}`,{headers:{'Authorization':userInfo.token}})
         setAppointments(response.data)
      }
      catch(error){
         console.log(error)
         toast.error('unable to fetch upcomming appointment data')
      }

   }
   useEffect(()=>{
      fetchAppointment()
   },[userInfo.id])
   return (
      <> 
      <Link to='history' className="p-4 border bg-gray-400 rounded-md">Completed Appointment</Link>
      <div className="w-full flex flex-wrap gap-5 items-center justify-center">
      {appointments.map((e,i)=>(
         <AppointmentCard key={i} 
            date={e.appointment_date} 
            time={e.appointment_time} 
            status={e.appointment_status} 
            patientId={e.patient} 
            appointmentId={e.appointment_id}
            appointmentType={e.appointment_type}
            />))}
      </div>
      <Outlet/>
      </>
    );
}