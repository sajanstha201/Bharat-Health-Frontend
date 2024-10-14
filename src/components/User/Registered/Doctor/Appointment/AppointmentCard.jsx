import React from "react";
import {Link} from 'react-router-dom'
export default function AppointmentCard({patientId, patientName, time, date, type, status }) {
   const onCancel=()=>{

   }
   const onReschedule=()=>{

   }
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Appointment Details</h3>
        <p className="text-gray-600"><strong>Patient Name:</strong> {patientName}</p>
        <p className="text-gray-600"><strong>Date:</strong> {date}</p>
        <p className="text-gray-600"><strong>Time:</strong> {time}</p>
        <p className="text-gray-600"><strong>Type:</strong> {type}</p>
        <p className="text-gray-600"><strong>Status:</strong> {status}</p>
      </div>
      <div className="flex justify-between mt-4">
        <Link to={`/doctor/appointment/patient-detail/?patient_id=${patientId}&appointment_detail=${JSON.stringify({appointmentTime:time,appointmentDate:date,appointmentType:type,appointmentStatus:status})}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full flex items-center justify-center"
          onClick={onReschedule}
        >
          View User Detail
        </Link>
      </div>
    </div>
  );
}
