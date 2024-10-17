import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import AddressForm from './AddressForm';
import ContactInfoForm from './ContactInfoForm';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import { setUserDetail } from '../../state/userInfoSlice';
import ChooseUserForm from './ChooseUserForm';
const Register = () => {
  const navigate=useNavigate()
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const [step, setStep] = useState(0);
  const dispatch=useDispatch()
  const [user,setUser]=useState('')
  const convertDataFormat = (data) => {
    // Create a new object with the desired keys mapped from the original data
    const transformedData = {
      city: data.city,
      confirmPassword: data.confirmPassword,
      dob: `${data.dobYear}-${data.dobMonth}-${data.dobDay}`, // Combine dob fields to YYYY-MM-DD format
      gmail: data.email,
      first_name: data.firstName,
      sex: data.gender,
      last_name: data.lastName,
      middle_name: data.middleName,
      password: data.password,
      phone_no: data.phoneNumber,
      pincode: data.pincode,
      primaryAddress: data.primaryAddress,
      secondaryAddress: data.secondaryAddress,
      state: data.state,
    };
  
    return transformedData;
  };
  
    const [data,setData]=useState({ 
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dobDay: '',
      dobMonth: '',
      dobYear: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      primaryAddress: '',
      secondaryAddress: '',
      state: '',
      city: '',
      pincode: '',
    })
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async() => {
    // Submission logic here
    try{
      const transformedData = convertDataFormat(data);
      const response=await axios.post(`${baseUrl}api/${user==='patient'?'patient':'doctor'}/profile/create/`,transformedData)
      toast.success('successfully login')
      dispatch(setUserDetail(response.data))
      navigate(user==='patient'?'/patient':'/doctor')
    }
    catch(error){
      toast.error('Registration Error')
    }
  };

  return (
    <div className='h-[100vh] flex items-center justify-center'>
      {step==0&&<ChooseUserForm nextStep={nextStep}/>}
      {step === 1 && <PersonalInfoForm nextStep={nextStep} setData={setData} data={data}/>}
      {step === 2 && <AddressForm nextStep={nextStep} prevStep={prevStep} setData={setData} data={data}/>}
      {step === 3 && <ContactInfoForm prevStep={prevStep} handleSubmit={handleSubmit} setData={setData} data={data}/>}
    </div>
  );
};

export default Register;
