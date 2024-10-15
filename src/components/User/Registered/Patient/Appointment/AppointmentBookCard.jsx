// src/AppointmentBookCard.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import { toast } from 'react-toastify';

const appointmentTypes = [
  'Consultation',
  'Follow-up',
  'Check-up',
];

const AppointmentBookCard = () => {
  const baseUrl = useSelector(state => state.baseUrl).backend;
  const userInfo = useSelector(state => state.userInfo);
  const navigate=useNavigate()
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);
  const doctor = JSON.parse(params.get('doctor'));
  const [date, setDate] = useState(''); // State for date
  const [time, setTime] = useState(''); // State for time
  const [appointmentType, setAppointmentType] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAppointmentTypeChange = (e) => {
    setAppointmentType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
    const formattedTime = today.toTimeString().split(' ')[0].slice(0, 5); // HH:MM  
    const data = {
      patient: userInfo.id,
      doctor: doctor.doctor_id,
      appointment_date: date,
      appointment_time: time, 
      appointment_status:'scheduled',
      appointment_type: appointmentType,
      created_at:formattedDate+" "+formattedTime,
      updated_at:formattedDate+" "+formattedTime
    };
    console.log(data)
    try {
      const response = await axios.post(`${baseUrl}api/patient/appointments/${userInfo.id}/`,data,{
        headers:{
            'Authorization':userInfo.token
        }
      });
      console.log('Appointment submitted:', response.data);
      toast.success('Appointment Booked')
      navigate('/patient')
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
      <p className="text-gray-500 mb-4">{doctor.specialization}</p>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Appointment Date:
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Appointment Time:
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Appointment Type:
          <select
            value={appointmentType}
            onChange={handleAppointmentTypeChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select...</option>
            {appointmentTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentBookCard;
