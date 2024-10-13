import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ name, specialization, rating,image,gmail,phoneNo,doctor_id}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center w-60 cursor-pointer hover:scale-110 transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-500 mb-4">{specialization}</p>
      <div className="flex justify-center mb-2">
        {Array(rating).fill().map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
        {Array(5 - rating).fill().map((_, i) => (
          <span key={i} className="text-gray-300">★</span>
        ))}
      </div>
      <Link to={`/patient/appointments/book/?doctor=${JSON.stringify({doctor_id:doctor_id,specialization:specialization,image:image,name:name})}`} 
      className='p-2 border  rounded-lg bg-green-500 text-center text-white text-lg font-semibold hover:bg-green-600 transition duration-300'>
        Book Appointment
    </Link>
    </div>
  );
};

export default DoctorCard;
