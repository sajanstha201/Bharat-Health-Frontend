import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { useSelector } from 'react-redux';
import axios from 'axios';

const DoctorList = () => {
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const [doctorsDetail,setDoctorsDetail]=useState([])
    const fetchDoctorsData=async()=>{
      const response=await axios.get(baseUrl+'api/patient/view-doctors/')
      setDoctorsDetail(response.data)
  }
    useEffect(()=>{
        fetchDoctorsData()
    },[])
  return (
    <div className="flex flex-wrap justify-around gap-4 mt-8 w-full">
      {doctorsDetail.map((doctor, index) => (
        <DoctorCard
          key={index}
          doctor_id={doctor.doctor_id}
          name={doctor.first_name+doctor.middle_name+doctor.last_name}
          specialization={doctor.specialization}
          rating={doctor.rating}
          image={doctor.profile_image}
          gmail={doctor.gmail}
          phoneNo={doctor.phone_no}
        />
      ))}
    </div>
  );
};

export default DoctorList;
