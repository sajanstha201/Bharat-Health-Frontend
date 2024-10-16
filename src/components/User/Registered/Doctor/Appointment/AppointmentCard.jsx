import React from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function AppointmentCard({patientId, time, date, status,appointmentId,appointmentType,fetchAppointments }) {
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const userInfo=useSelector(state=>state.userInfo)
   const onCancel=()=>{

   }
   const onReschedule=()=>{

   }
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
      <div className="">
        <p className="text-gray-600"><strong>Appointment ID:</strong> {appointmentId}</p>
        <p className="text-gray-600"><strong>Date:</strong> {date}</p>
        <p className="text-gray-600"><strong>Time:</strong> {time}</p>
        <p className="text-gray-600"><strong>Type:</strong> {appointmentType}</p>
        <p className="text-gray-600"><strong>Status:</strong> {status}</p>
      </div>
      {status!=='Completed'&&<div className="flex justify-between mt-4 gap-2 flex-col">
        <Link to={`/doctor/appointment/patient-detail/?patient_id=${encodeURIComponent(patientId)}&appointment_detail=${encodeURIComponent(JSON.stringify({appointmentTime:time,appointmentDate:date,appointmentType:appointmentType,appointmentStatus:status}))}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full flex items-center justify-center"
          onClick={onReschedule}
        >
          View User Detail
        </Link>
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full flex items-center justify-center"
        onClick={async()=>{
          try{
            const response=await axios.patch(`${baseUrl}api/doctor/appointments/${userInfo.id}/`,
              {
                appointment_id:appointmentId,
                appointment_status:'completed'},
              {headers:
                {'Authorization':userInfo.token}
              })
              toast.success('Appointment ID:'+appointmentId+'completed')
                console.log(response.date)
                fetchAppointments()
          }
          catch(error){
            console.log(error)
            toast.error('error ')
          }
        }}
        >Complete</div>
      </div>}
    </div>
  );
}
