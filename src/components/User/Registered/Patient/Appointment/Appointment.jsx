import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MyAppointmentCard from './MyAppointmentCard'

export default function Appointment() {
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const userInfo=useSelector(state=>state.userInfo)
  const [appointments,setAppointments]=useState([])
  useEffect(()=>{
    const fetchAppointment=async()=>{
      const response=await axios.get(baseUrl+'api/patient/appointments/'+userInfo.id+'/',{
        'headers':{
          'Authorization':userInfo.token
        }
      })
      setAppointments(response.data)
      console.log(response.data);
      
    }
    if(appointments.length===0) fetchAppointment()
  })
  return (
    <>
    <div className='flex flex-wrap gap-10 p-5 items-center justify-center'>
      {appointments.map((e,i)=>(<MyAppointmentCard appointmentDetail={e} key={i}/>))}
    </div>
    
    {/* <div>Today Appointment</div>
    this is fro todya AppointmentSetting
    <div>Previous Appointment</div>
    this if for remaing appointemtn */}
    </>
  )
}
