import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import MyAppointmentCard from './MyAppointmentCard'
import { toast } from "react-toastify"
export default function TodayAppointment(){
    const [appointments,setAppointments]=useState([])
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const userInfo=useSelector(state=>state.userInfo)
    const fetchTodayAppointment=async()=>{
        try{
            console.log('fetching today apppointment')
            const response=await axios.get(`${baseUrl}api/patient/appointments/${userInfo.id}/?today=${true}`,{'headers':{'Authorization':userInfo.token}})
            console.log(response.data)
            setAppointments(response.data)
        }
        catch(error){
            console.log(error)
            toast.error("Error Fetching Today Appointment Data")
        }

    }
    useEffect(()=>{
        fetchTodayAppointment()
    },[])
   return(
   <>   
   <h1 className="text-[30px] font-bold">Today Appointments</h1>
   {appointments.length===0&&<h1 className="text-sm">No Appointment Today</h1>}
    <div className='flex flex-wrap gap-10 p-5 items-center justify-center'>
      {appointments.map((e,i)=>(<MyAppointmentCard appointmentDetail={e} key={i} fetchAppointment={fetchTodayAppointment}/>))}
    </div>
   </>)
}