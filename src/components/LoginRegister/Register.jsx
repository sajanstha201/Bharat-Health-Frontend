import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import AddressForm from './AddressForm';
import ContactInfoForm from './ContactInfoForm';

const Register = () => {
  const [step, setStep] = useState(1);
    const [data,setData]=useState({ })
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Submission logic here
    console.log(data)
    alert('Form submitted!');
  };

  return (
    <div>
      {step === 1 && <PersonalInfoForm nextStep={nextStep} setData={setData}/>}
      {step === 2 && <AddressForm nextStep={nextStep} prevStep={prevStep} setData={setData}/>}
      {step === 3 && <ContactInfoForm prevStep={prevStep} handleSubmit={handleSubmit} setData={setData}/>}
    </div>
  );
};

export default Register;
