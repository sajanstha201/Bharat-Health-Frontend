import React, { useState } from 'react';

const PersonalInfoForm = ({ nextStep, setData }) => {
  // Local state to store the form data
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
  });

  // Handler to update formData and call the setData prop
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Personal Information</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <div className="flex items-center mb-4">
          <label className="mr-4 font-semibold">Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            className="mr-2"
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            className="ml-4 mr-2"
          /> Female
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-4 font-semibold">Date of Birth</label>
          <input
            type="text"
            name="dobDay"
            placeholder="DD"
            value={formData.dobDay}
            onChange={handleChange}
            className="w-1/4 px-2 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="dobMonth"
            placeholder="MM"
            value={formData.dobMonth}
            onChange={handleChange}
            className="w-1/4 px-2 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="dobYear"
            placeholder="YYYY"
            value={formData.dobYear}
            onChange={handleChange}
            className="w-1/3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission
            nextStep();
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
