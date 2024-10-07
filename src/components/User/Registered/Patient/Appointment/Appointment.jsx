import React from 'react'
import { Link } from 'react-router-dom'

export default function Appointment() {
  return (
    <>
    <Link to='book-appointment' className='flex p-4 m-4 bg-gray-300  rounded-md'>Book Appointment</Link>
    <div>Today Appointment</div>
    this is fro todya AppointmentSetting
    <div>Previous Appointment</div>
    this if for remaing appointemtn
    </>
  )
}
